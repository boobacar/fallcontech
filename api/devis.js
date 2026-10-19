// Vercel Serverless Function: POST /api/devis
// Reçoit une demande de devis depuis la boutique, l'envoie par e-mail et
// renvoie une référence au client. La demande est ainsi conservée même si
// le visiteur n'envoie pas le message WhatsApp.

const MAX_ITEMS = 30;

function escapeHtml(s) {
  return String(s || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function clean(value, max = 200) {
  return String(value || '').trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value);
}

// Limitation simple par instance (les fonctions sont éphémères : c'est un
// garde-fou, pas un vrai rate-limit distribué).
const hits = new Map();
function tooMany(ip) {
  const now = Date.now();
  const windowMs = 60_000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > 6;
}

async function sendEmail({ apiKey, from, to, subject, html, replyTo, text }) {
  const body = { from: `Fallcon Tech <${from}>`, to: [to], subject, html };
  if (replyTo) body.reply_to = replyTo;
  if (text) body.text = text;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!r.ok) {
    const err = await r.text().catch(() => '');
    throw new Error(`Resend ${r.status}: ${err.slice(0, 300)}`);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
      req.socket?.remoteAddress ||
      'unknown';

    const b = req.body || {};

    // Piège à robots : champ invisible qui doit rester vide.
    if (clean(b.website)) {
      res.status(200).json({ ok: true, ref: 'DEV-000000-0000' });
      return;
    }

    if (tooMany(ip)) {
      res.status(429).json({ error: 'Trop de demandes. Réessayez dans une minute.' });
      return;
    }

    const name = clean(b.name, 120);
    const company = clean(b.company, 150);
    const email = clean(b.email, 150);
    const phone = clean(b.phone, 40);
    const city = clean(b.city, 80);
    const note = clean(b.note, 1500);
    const page = clean(b.page, 300);

    if (name.length < 2) {
      res.status(400).json({ error: 'Le nom est obligatoire.' });
      return;
    }
    if (phone.length < 6) {
      res.status(400).json({ error: 'Le téléphone est obligatoire.' });
      return;
    }
    if (email && !isEmail(email)) {
      res.status(400).json({ error: 'Adresse e-mail invalide.' });
      return;
    }

    const rawItems = Array.isArray(b.items) ? b.items.slice(0, MAX_ITEMS) : [];
    const items = rawItems
      .map((it) => ({
        name: clean(it?.name, 160),
        qty: Math.max(1, Math.min(99, parseInt(it?.qty, 10) || 1)),
        configNote: clean(it?.configNote, 200),
        slug: clean(it?.slug, 160),
      }))
      .filter((it) => it.name);

    if (!items.length) {
      res.status(400).json({ error: 'Aucun équipement dans la demande.' });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.RESEND_TO || 'info@fallcontech.com';
    const from = process.env.RESEND_FROM || 'onboarding@resend.dev';
    if (!apiKey) {
      res.status(500).json({ error: 'Configuration e-mail manquante.' });
      return;
    }

    const now = new Date();
    const stamp = now.toISOString().slice(0, 10).replaceAll('-', '');
    const rand = Math.random().toString(16).slice(2, 6).toUpperCase();
    const ref = `DEV-${stamp}-${rand}`;

    const rows = items
      .map(
        (it) =>
          `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee">${escapeHtml(it.name)}</td>` +
          `<td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:center"><b>${it.qty}</b></td>` +
          `<td style="padding:6px 8px;border-bottom:1px solid #eee;color:#555">${escapeHtml(it.configNote)}</td></tr>`,
      )
      .join('');

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.55;color:#111">
        <p style="margin:0 0 4px;font-size:12px;color:#666">Référence ${ref} · ${now.toLocaleString('fr-FR', { timeZone: 'Africa/Dakar' })}</p>
        <h2 style="margin:0 0 14px">Nouvelle demande de devis — Boutique</h2>
        <table style="border-collapse:collapse;margin-bottom:14px">
          <tr><td style="padding:3px 10px 3px 0"><b>Nom</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:3px 10px 3px 0"><b>Société</b></td><td>${escapeHtml(company) || '—'}</td></tr>
          <tr><td style="padding:3px 10px 3px 0"><b>Téléphone</b></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:3px 10px 3px 0"><b>E-mail</b></td><td>${escapeHtml(email) || '—'}</td></tr>
          <tr><td style="padding:3px 10px 3px 0"><b>Ville</b></td><td>${escapeHtml(city) || '—'}</td></tr>
        </table>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <thead>
            <tr style="background:#0b3d66;color:#fff">
              <th style="padding:6px 8px;text-align:left">Équipement</th>
              <th style="padding:6px 8px">Qté</th>
              <th style="padding:6px 8px;text-align:left">Configuration</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        ${note ? `<p style="margin-top:14px"><b>Précisions du client</b><br/>${escapeHtml(note).replaceAll('\n', '<br/>')}</p>` : ''}
        ${page ? `<p style="margin-top:14px;font-size:12px;color:#666">Page d'origine : ${escapeHtml(page)}</p>` : ''}
      </div>`;

    const text = [
      `Référence ${ref}`,
      `Nom: ${name}`,
      `Société: ${company || '-'}`,
      `Téléphone: ${phone}`,
      `E-mail: ${email || '-'}`,
      `Ville: ${city || '-'}`,
      '',
      ...items.map((it) => `- ${it.name} x${it.qty}${it.configNote ? ` (${it.configNote})` : ''}`),
      '',
      note ? `Précisions: ${note}` : '',
      page ? `Page: ${page}` : '',
    ].join('\n');

    await sendEmail({
      apiKey,
      from,
      to,
      subject: `[Devis] ${company || name} — ${items.length} référence(s) — ${ref}`,
      html,
      text,
      replyTo: email || undefined,
    });

    // Accusé de réception au client, sans bloquer la réponse.
    if (email) {
      try {
        await sendEmail({
          apiKey,
          from,
          to: email,
          subject: `Fallcon Tech — votre demande de devis (réf. ${ref})`,
          html: `<p>Bonjour ${escapeHtml(name)},</p>
            <p>Nous avons bien reçu votre demande de devis (référence <b>${ref}</b>) :</p>
            <ul>${items.map((it) => `<li>${escapeHtml(it.name)} × ${it.qty}</li>`).join('')}</ul>
            <p>Nous revenons vers vous sous 24 heures ouvrées avec les prix, les licences, le délai et les modalités d'installation.</p>
            <p>Fallcon Tech — Dakar<br/>info@fallcontech.com · +221 77 483 75 76</p>`,
        });
      } catch (e) {
        console.error('[devis] accusé de réception non envoyé', String(e).slice(0, 200));
      }
    }

    res.status(200).json({ ok: true, ref });
  } catch (e) {
    console.error('[devis] erreur', String(e).slice(0, 400));
    res.status(502).json({ error: "L'envoi a échoué. Réessayez ou écrivez à info@fallcontech.com." });
  }
}
