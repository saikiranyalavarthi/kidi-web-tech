// next.config.js
module.exports = {
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
