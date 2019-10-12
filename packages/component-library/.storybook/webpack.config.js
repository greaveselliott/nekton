module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader']
  });

  config.resolve.extensions.push('.stories.ts', '.stories.tsx');
  return config;
};
