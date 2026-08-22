// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/old-page",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
