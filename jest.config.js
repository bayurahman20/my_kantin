module.exports = {
  preset: 'react-native',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|my-kantin|react-native-button)/)',
  ],
};
