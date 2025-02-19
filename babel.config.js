module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
            moduleName: "@env",
            path: ".env",
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@services': './src/services',
            '@storage': './src/storage',
            '@theme': './src/theme',
            '@utils': './src/utils',
          }
        }
      ]
    ]
  };
};
