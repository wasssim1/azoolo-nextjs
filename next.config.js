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
        source: '/marketplace',
        destination: '/',
        permanent: true,
      },
    ]
  }
};
