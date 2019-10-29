const { resolve } = require('path')

module.exports = (options = {config: {}}) => {
  const config = {
    devtool: null,
    watchOptions: {},
    module: {
      rules: []
    },
    plugins: [],
    resolve: {
      extensions: [],
      alias: {},
      mainFields: [],
    },
    entry: {},
    output: {},
    ...options.config
  }

  config.devtool = 'none'

  // // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.svelte$/],
    }
  })

  // Svelte
  config.module.rules.push({
    test: /\.(html|svelte)$/,
    exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        preprocess: require('svelte-preprocess')({ /* options */ })
      }
    }
  })

  // Resolve
  config.resolve.extensions = ['.mjs', '.js', '.svelte', '.ts', '.tsx']
  config.resolve.mainFields = ['svelte', 'browser', 'module', 'main']
  config.resolve.alias = {
    svelte: resolve('node_modules', 'svelte'),
    '@': resolve('src/js'),
  }

  // Entry
  config.entry = {
    build: resolve('src/index.ts'),
  }

  // Output
  config.output = {
    filename: '[name].js',
    path: resolve('dist')
  }

  // Server
  config.devServer = {
    contentBase: resolve('dist'),
    compress: false,
    port: process.env.SERVER_PORT || 9000
  }


  return config
}
