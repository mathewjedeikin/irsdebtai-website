// app/privacy/page.tsx
// Dedicated Privacy page with matching navigation and site layout
export const runtime = "nodejs";

export const metadata = {
  title: "Privacy • IRSdebtAI",
  description: "How IRSdebtAI handles your information.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "250px 1fr",
        minHeight: "100vh",
        background: "#f7faf9",
      }}
    >
      {/* LEFT NAVIGATION */}
      <aside
        style={{
          background: "#ffffff",
          borderRight: "1px solid rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Logo section */}
          <div
            style={{
              padding: "24px 20px 16px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <a href="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#111827",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                IRS<span style={{ color: "#1d4ed8" }}>debt</span>AI
              </div>
            </a>
          </div>

          {/* Nav links */}
          <nav style={{ padding: "24px 20px", display: "grid", gap: "14px" }}>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#111827",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              💬 Chat
            </a>
            <a
              href="/settle"
              style={{
                textDecoration: "none",
                color: "#111827",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              🧾 Settle
            </a>
            <a
              href="/faqs"
              style={{
                textDecoration: "none",
                color: "#111827",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ❓ FAQs
            </a>
            <a
              href="/about"
              style={{
                textDecoration: "none",
                color: "#111827",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ℹ️ About
            </a>
          </nav>
        </div>

        {/* Bottom legal links */}
        <div
          style={{
            padding: "20px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            fontSize: 13,
            color: "#64748b",
          }}
        >
          <div>
            <a
              href="/privacy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Privacy
            </a>{" "}
            •{" "}
            <a
              href="/terms"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Terms
            </a>{" "}
            •{" "}
            <a
              href="/blog"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Blog
            </a>
          </div>
          <div style={{ marginTop: 6 }}>© 2025 IRSdebtAI, Inc.</div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <section style={{ padding: "36px 40px" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: 16,
            boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
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
              Privacy Policy
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
            <h2>Introduction and Purpose</h2>
            <p>
              At IRS debt AI, we respect your privacy. This preview app operates locally in your
              browser (no persistent backend by default). That said, when you use the native app or
              connect to servers, here’s how we will treat your data.
            </p>

            <h2>What Data We Collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>
                <strong>User-provided data:</strong> e.g. amount owed, income, expenses, name, email
                (for contact forms)
              </li>
              <li>
                <strong>Device data &amp; usage metrics:</strong> app version, timestamps,
                interactions
              </li>
              <li>
                <strong>Third-party data:</strong> if you choose to connect external services (none
                by default)
              </li>
            </ul>
            <p>
              If in a version you choose to send data to the server, we’ll explicitly disclose when
              that occurs and ask for consent.
            </p>

            <h2>How We Use Data</h2>
            <ul>
              <li>Generate your draft PDFs</li>
              <li>Provide contextual chat responses / prompts</li>
              <li>Improve the app, debug, analyze usage</li>
              <li>Contact you if you reach out (via contact form)</li>
            </ul>

            <h2>Data Sharing</h2>
            <p>We will not share personal data with third parties, except:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>For legal compliance (if required by law or subpoena)</li>
              <li>
                With our service providers (e.g. email provider) under confidentiality agreements
              </li>
            </ul>

            <h2>Data Retention and Deletion</h2>
            <ul>
              <li>
                Data kept only as long as needed to fulfill the above purposes or comply with law
              </li>
              <li>In preview mode, data resets when you refresh the browser</li>
              <li>
                In the full version, users can request deletion of their data or account purge
              </li>
            </ul>

            <h2>Your Rights and Controls</h2>
            <ul>
              <li>You can access, correct, or delete your personal information</li>
              <li>You can withdraw consent for data usage</li>
              <li>You can disable any optional features collecting data</li>
            </ul>

            <h2>Children</h2>
            <p>We do not knowingly collect data from children under 13.</p>

            <h2>Security</h2>
            <p>
              We implement standard technical and organizational measures to protect data (e.g.
              encryption in transit and at rest). But no system is perfect — we disclaim liability
              for breaches not due to gross negligence.
            </p>

            <h2>Updates to Policy</h2>
            <p>
              We may modify this Privacy Policy. We’ll post changes with version date and, where
              appropriate, notify users.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Email:{" "}
              <a href="mailto:help@irsdebt.ai" style={{ color: "#1d4ed8" }}>
                help@irsdebt.ai
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
