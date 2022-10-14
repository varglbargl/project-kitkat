module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'initFirebase': './src/initFirebase.js',
            'assets': './assets',
            'src': './src',
            'components': './src/components'
          },
        },
      ],
    ],
  };
};
