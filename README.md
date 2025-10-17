# IRSdebtAI – Web Build (v35)

This is a minimal Next.js (App Router) project that serves your current preview **as-is** on `/`
and provides **real routes** for `/privacy`, `/terms`, and `/blog`, plus an API proxy for Groq.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Routes
- `/` – Embeds your v34 preview without altering the look (`public/preview-v34.html`).
- `/privacy` – Privacy page (editable React page).
- `/terms` – Terms page.
- `/blog` – Placeholder route for future posts.
- `/api/groq-chat` – Server-side proxy for your Groq chat (expects `GROQ_API_KEY`).

### Environment
Create `.env.local`:
```
GROQ_API_KEY=your_groq_key_here
```

### Contact Form (Formspree)
In your HTML preview (now at `public/preview-v34.html`), replace `FORM_ID` with your real Formspree ID.
If you want to move the contact form into React pages later, we can wire it natively.

### Deploy on Vercel
```bash
npm run build
vercel deploy --prod
```
(Or connect the repo to Vercel; it will auto-detect Next.js.)

### Next Steps
- When ready, we can **migrate the preview from `public/preview-v34.html` into React components** so everything is first-class React instead of an iframe. That won’t change the visual design.
- If you’d like file-based static export (e.g., `/privacy/index.html`), Vercel routing via Next handles clean URLs automatically.
