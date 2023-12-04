module.exports = {
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
  },

  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop/listing',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
