/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect /privacy → /#privacy
      {
        source: "/privacy",
        destination: "/#privacy",
        permanent: true,
      },
      // Redirect /terms → /#terms
      {
        source: "/terms",
        destination: "/#terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
