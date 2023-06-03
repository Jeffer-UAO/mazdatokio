const esbuildConfig = require('./esbuild.config');

module.exports = {
  // Resto de la configuración de Next.js

  webpack: (config, options) => {
    if (!options.isServer) {
      // Utiliza la configuración de esbuild
      config = esbuildConfig.webpack(config, options);
    }

    return config;
  },
};
