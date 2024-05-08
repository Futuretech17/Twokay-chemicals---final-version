const path = require('path');

module.exports = {
  // Extend the existing webpack configuration
  webpack: (config, { webpack }) => {
    // Add Babel loader for JSX files
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    });

    return config;
  },
};
