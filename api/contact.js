// Vercel Serverless Function: POST /api/contact
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }
  try {
    const {
      name = '',
      email = '',
      whatsapp = '',
      businessType = '',
      goal = '',
      message = '',
    } = req.body || {}

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.RESEND_TO || 'info@fallcontech.com'
    const from = process.env.RESEND_FROM || 'onboarding@resend.dev'

    if (!apiKey) {
      res.status(500).json({ error: 'Missing RESEND_API_KEY' })
      return
    }

    const subject = `Nouveau message contact — ${name || 'Anonyme'} (${goal || 'Sans objectif'})`
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Nouveau message du site</h2>
        <table style="border-collapse:collapse">
          <tr><td style="padding:4px 8px"><b>Nom</b></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:4px 8px"><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:4px 8px"><b>WhatsApp</b></td><td>${escapeHtml(whatsapp)}</td></tr>
          <tr><td style="padding:4px 8px"><b>Type d'entreprise</b></td><td>${escapeHtml(businessType)}</td></tr>
          <tr><td style="padding:4px 8px"><b>Objectif</b></td><td>${escapeHtml(goal)}</td></tr>
        </table>
        ${message ? `<p style="margin-top:12px"><b>Message</b><br/>${escapeHtml(message).replace(/\n/g,'<br/>')}</p>` : ''}
      </div>`

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: `Fallcon Tech <${from}>`, to: [to], subject, html, reply_to: email }),
    })

    if (!r.ok) {
      const err = await r.text().catch(() => '')
      console.error('[Resend] status', r.status, 'body:', err)
      res.status(502).json({ error: 'Resend error', details: err })
      return
    }

    res.status(200).json({ ok: true })
  } catch (e) {
    console.error(e)
    res.status(400).json({ error: 'Invalid request', details: String(e) })
  }
}

function escapeHtml(s) {
  return String(s || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

