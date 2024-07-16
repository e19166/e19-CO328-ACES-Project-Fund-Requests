module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // Targets the current Node.js version
    '@babel/preset-react', // Enables JSX support
    '@babel/preset-typescript', // Enables TypeScript support
  ],
};
