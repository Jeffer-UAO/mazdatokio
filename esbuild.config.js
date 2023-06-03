const esbuildLoader = require('esbuild-loader');

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      // Utiliza esbuild-loader para transpilar los archivos JavaScript y TypeScript
      config.module.rules.push({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx', // Cambia 'tsx' por 'jsx' si estás utilizando JavaScript en lugar de TypeScript
              target: 'es2017',
            },
          },
        ],
      });
    }

    return config;
  },
};
