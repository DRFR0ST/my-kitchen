module.exports = {
    module: {
      rules: [
        // new rule: anything ending with ".md" is loaded with raw-loader
        {
          test: /\.md$/i,
          use: 'raw-loader'
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  }