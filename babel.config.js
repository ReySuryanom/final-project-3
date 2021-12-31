module.exports = function (api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];
  const plugins = [
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
