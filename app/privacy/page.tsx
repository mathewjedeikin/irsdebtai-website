export const metadata = { title: "Privacy • IRSdebtAI" };

export default function Privacy() {
  return (
    <main style={{maxWidth: 860, margin: "40px auto", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 24}}>
      <h1 style={{marginTop:0}}>Privacy Policy</h1>
      <p>We care about your privacy. This website provides general information and a chat assistant to help you understand IRS notices and options. It is not legal or tax advice.</p>
      <ul>
        <li><b>No SSNs or IRS/Login.gov credentials:</b> Please don’t share them here.</li>
        <li><b>Chat content:</b> We may process chat messages to generate helpful responses. Avoid sharing highly sensitive information.</li>
        <li><b>Third‑party services:</b> Our AI responses are provided by Groq/OpenAI via a server-side proxy. Do not enter classified or regulated data.</li>
        <li><b>Cookies/analytics:</b> We may use basic analytics to improve the site experience.</li>
      </ul>
      <p style={{fontSize:12, color:"#475569", marginTop:16}}><i>Effective date:</i> October 17, 2025</p>
    </main>
  );
}
