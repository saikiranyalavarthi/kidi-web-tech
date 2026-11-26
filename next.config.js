/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Supabase Storage images
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },

      // Unsplash service images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
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

  async headers() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kidi-web-tech.vercel.app",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
