const { mergeConfig } = require('vite');

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    server: {
      allowedHosts: [process.env.VITE_ALLOWED_HOST]
    }
  });
};
