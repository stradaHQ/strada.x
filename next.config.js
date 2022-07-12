/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/stradaHQ",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/stradaHQ",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
