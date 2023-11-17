module.exports = {
  env: {
    PUBLIC_URL: ""
  },

  async redirects() {
    return [
      {
        source: '/shop',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lisitng',
        destination: '/',
        permanent: true,
      },
    ]
  }
};
