module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-reanimated/plugin', 'react-native-paper/babel'],
    },
  },
};
