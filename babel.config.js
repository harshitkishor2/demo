module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          // '@assets': './src/assets',
          // '@components': './src/components',
          "@app": "./src",
        },
      },
    ],
  ],
};
