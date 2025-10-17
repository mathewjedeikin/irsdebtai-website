export const metadata = {
  title: "IRSdebtAI – Settle your tax problems",
  description: "Educational guidance for understanding IRS notices and exploring options.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f7faf9" }}>{children}</body>
    </html>
  );
}
