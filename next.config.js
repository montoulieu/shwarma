module.exports = {
  images: {
    domains: ['f4.bcbits.com'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
