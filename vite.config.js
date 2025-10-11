import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
  plugins: [
    react(),
    tailwindcss(),
    // Simple dev-only API route for contact form using Resend
    {
      name: 'contact-api',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Method Not Allowed' }))
            return
          }
          let body = ''
          req.on('data', (c) => (body += c))
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}')
              const {
                name = '',
                email = '',
                whatsapp = '',
                businessType = '',
                goal = '',
                message = '',
              } = data

              const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY
              const to = env.RESEND_TO || process.env.RESEND_TO || 'info@fallcontech.com'
              const from = env.RESEND_FROM || process.env.RESEND_FROM || 'onboarding@resend.dev'

              if (!apiKey) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Missing RESEND_API_KEY' }))
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
                res.statusCode = 502
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Resend error', details: err }))
                return
              }

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true }))
            } catch (e) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Invalid request', details: String(e) }))
            }
          })
        })

        function escapeHtml(s) {
          return String(s || '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
};
});
