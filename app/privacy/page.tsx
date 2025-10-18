// app/privacy/page.tsx
// Dedicated Privacy page using the site's card/rail layout (no iframe).
export const runtime = "nodejs"; // standard Node runtime

export const metadata = {
  title: "Privacy • IRSdebtAI",
  description: "How IRSdebtAI handles your information.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr", // side-nav rail + content area
        minHeight: "100vh",
        background: "#f7faf9",
      }}
    >
      {/* Left rail: simple nav to match site tone */}
      <aside
        style={{
          borderRight: "1px solid rgba(0,0,0,0.06)",
          background: "#ffffff",
        }}
      >
        <div style={{ padding: 20, fontFamily: "system-ui, sans-serif", fontSize: 14 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>IRSdebtAI</div>
          <nav style={{ display: "grid", gap: 8 }}>
            <a href="/" style={{ textDecoration: "none", color: "#111827" }}>Home</a>
            <a href="/privacy" style={{ textDecoration: "none", color: "#111827" }}>Privacy</a>
            <a href="/terms" style={{ textDecoration: "none", color: "#111827" }}>Terms</a>
            <a href="/blog" style={{ textDecoration: "none", color: "#111827" }}>Blog</a>
          </nav>
        </div>
      </aside>

      {/* Main content card */}
      <section style={{ padding: "28px 28px 80px 28px" }}>
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
          <header style={{ padding: "22px 24px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <h1
              style={{
                margin: 0,
                fontFamily: "system-ui, sans-serif",
                fontSize: 24,
                lineHeight: "28px",
                fontWeight: 800,
              }}
            >
              Privacy Policy
            </h1>
            <div
              style={{
                marginTop: 6,
                fontFamily: "system-ui, sans-serif",
                fontSize: 13,
                color: "#475569",
              }}
            >
              Last Updated: October 10, 2025
            </div>
          </header>

          <article
            style={{
              padding: 24,
              fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
              color: "#0f172a",
              lineHeight: 1.6,
              fontSize: 15,
            }}
          >
            <h2 style={{ fontSize: 18, marginTop: 0 }}>Introduction and Purpose</h2>
            <p>
              At IRS debt AI, we respect your privacy. This preview app operates locally in your
              browser (no persistent backend by default). That said, when you use the native app or
              connect to servers, here’s how we will treat your data.
            </p>

            <h2 style={{ fontSize: 18 }}>What Data We Collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>
                <strong>User-provided data:</strong> e.g. amount owed, income, expenses, name, email
                (for contact forms)
              </li>
              <li>
                <strong>Device data &amp; usage metrics (if included):</strong> app version,
                timestamps, interactions
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

            <h2 style={{ fontSize: 18 }}>How We Use Data</h2>
            <p>We use data to:</p>
            <ul>
              <li>Generate your draft PDFs</li>
              <li>Provide contextual chat responses / prompts</li>
              <li>Improve the app, debug, analyze usage</li>
              <li>Contact you if you reach out (via contact form)</li>
            </ul>

            <h2 style={{ fontSize: 18 }}>Data Sharing</h2>
            <p>We will not share personal data with third parties, except:</p>
            <ul>
              <li>With your explicit consent</li>
              <li>For legal compliance (if required by law or subpoena)</li>
              <li>
                With our service providers (e.g. email provider) under confidentiality agreements
              </li>
            </ul>

            <h2 style={{ fontSize: 18 }}>Data Retention and Deletion</h2>
            <ul>
              <li>Data kept only as long as needed to fulfill the above purposes or comply with law</li>
              <li>In the preview mode, data resets when you refresh the browser</li>
              <li>
                In the full version, users can request deletion of their data or account purge
              </li>
            </ul>

            <h2 style={{ fontSize: 18 }}>Your Rights and Controls</h2>
            <ul>
              <li>You can access, correct, or delete your personal information</li>
              <li>You can withdraw consent for data usage</li>
              <li>You can disable any optional features collecting data</li>
            </ul>

            <h2 style={{ fontSize: 18 }}>Children</h2>
            <p>We do not knowingly collect data from children under 13.</p>

            <h2 style={{ fontSize: 18 }}>Security</h2>
            <p>
              We implement standard technical and organizational measures to protect data (e.g.
              encryption in transit and at rest). But no system is perfect — we disclaim liability
              for breaches not due to gross negligence.
            </p>

            <h2 style={{ fontSize: 18 }}>Updates to Policy</h2>
            <p>
              We may modify this Privacy Policy. We’ll post changes with version date and, where
              appropriate, notify users.
            </p>

            <h2 style={{ fontSize: 18 }}>Contact</h2>
            <p>
              Questions? Email:{" "}
              <a href="mailto:help@irsdebt.ai">help@irsdebt.ai</a>
            </p>
          </article>
        </div>

        {/* Footer: two lines, centered */}
        <footer style={{ marginTop: 28 }}>
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              textAlign: "center",
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              color: "#334155",
            }}
          >
            <div style={{ marginBottom: 6 }}>
              <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>
                Privacy Policy
              </a>
              {"  •  "}
              <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>
                Terms
              </a>
              {"  •  "}
              <a href="/blog" style={{ color: "inherit", textDecoration: "none" }}>
                Blog
              </a>
            </div>
            <div>© 2025 IRSdebtAI, Inc.</div>
          </div>
        </footer>
      </section>
    </main>
  );
}
