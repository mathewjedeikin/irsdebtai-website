// app/terms/page.tsx
// Terms page with centered logo header (no sidebar)
export const runtime = "nodejs";

export const metadata = {
  title: "Terms • IRSdebtAI",
  description: "Terms and Conditions for using IRSdebtAI.",
};

export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7faf9",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 80px",
      }}
    >
      {/* HEADER WITH CENTERED LOGO */}
      <header style={{ marginBottom: 40 }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <img
            src="/irs debt ai logo clear.png" /* rename to /irsdebtai-logo.png if you prefer */
            alt="IRSdebtAI logo"
            style={{
              width: 240,
              height: "auto",
              display: "block",
              margin: "0 auto",
              opacity: 0.95,
            }}
          />
        </a>
      </header>

      {/* MAIN CARD */}
      <section
        style={{
          width: "100%",
          maxWidth: 860,
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.06)",
          borderRadius: 16,
          boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "system-ui, sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: "#111827",
            }}
          >
            Terms and Conditions
          </h1>
          <p
            style={{
              marginTop: 6,
              color: "#475569",
              fontSize: 14,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Last Updated: October 10, 2025
          </p>
        </header>

        <article
          style={{
            padding: "28px",
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            color: "#0f172a",
            lineHeight: 1.6,
            fontSize: 15,
          }}
        >
          <h2>1. Introduction and Scope</h2>
          <p>
            IRS debt AI (“we,” “our,” “us”) provides an interface to generate draft
            tax-resolution documents and offer informational guidance about IRS programs
            (Installment Agreements, Offers in Compromise, CNC). This is a preview /
            educational tool only and not legal, tax, or financial advice.
          </p>
          <p>
            By using this app, you agree to these terms. If you don’t agree, do not use it.
          </p>

          <h2>2. No Professional Relationship</h2>
          <p>Nothing in this app or its outputs creates an attorney-client, CPA-client, or tax advisor relationship. We are not:</p>
          <ul>
            <li>A law firm</li>
            <li>The IRS or any government agency</li>
            <li>Licensed to give legal or tax advice</li>
          </ul>
          <p>
            You should review any drafts shown here with a qualified professional before submitting to the IRS.
          </p>

          <h2>3. Use of the Service</h2>
          <p>You may use this app to:</p>
          <ul>
            <li>Ask questions in Chat (education &amp; guidance style)</li>
            <li>Input your financial data to generate draft PDFs</li>
            <li>Review and edit generated drafts</li>
          </ul>
          <p>You may not use the service to:</p>
          <ul>
            <li>Submit false information to the IRS</li>
            <li>Encourage or facilitate tax fraud</li>
            <li>Use it for automated bulk generation or resale</li>
          </ul>

          <h2>4. Disclaimers and Limitations</h2>
          <ul>
            <li><strong>Accuracy:</strong> All computational results are estimates only. Actual IRS review may differ.</li>
            <li><strong>Liability:</strong> We disclaim liability for any losses, damages, or penalties incurred by relying on this app’s results.</li>
            <li><strong>Availability:</strong> We may change or discontinue features without notice.</li>
            <li><strong>Third-party data and APIs:</strong> We rely on third-party services (e.g., OpenAI). We are not responsible for their outages or policy changes.</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content—UI, code, design, and text—is owned by IRS debt AI or its licensors.
          </p>
          <p>
            You may use the outputs (draft PDFs) for your personal use, but you may not republish, resell, or distribute this app’s backend or core content without permission.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We may update these Terms. When we do, we’ll post the revised version and date. Continued use after changes means you accept the new terms.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these Terms, please contact:&nbsp;
            <a href="mailto:help@irsdebt.ai" style={{ color: "#1d4ed8" }}>
              help@irsdebt.ai
            </a>
          </p>
        </article>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 28, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#334155",
          }}
        >
          <div style={{ marginBottom: 6 }}>
            <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
              Terms
            </a>{" "}
            •{" "}
            <a href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
              Blog
            </a>
          </div>
          <div>© 2025 IRSdebtAI, Inc.</div>
        </div>
      </footer>
    </main>
  );
}
