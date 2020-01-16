/* eslint-disable */
const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/less/antd-custom.less'), 'utf8')
)

// https://flaviocopes.com/nextjs-analyze-app-bundle/
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withLess({
  env: {
    API_URL: process.env.API_URL
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    const aliases = config.resolve.alias;

    aliases['~'] = path.resolve(__dirname);
    aliases['components'] = path.resolve(__dirname + '/src/components');
    aliases['forms'] = path.resolve(__dirname + '/src/components/forms');
    aliases['layouts'] = path.resolve(__dirname + '/src/components/layouts');
    aliases['middlewares'] = path.resolve(__dirname + '/src/middlewares');
    aliases['hooks'] = path.resolve(__dirname + '/src/hooks');
    aliases['services'] = path.resolve(__dirname + '/src/services');
    aliases['src'] = path.resolve(__dirname + '/src');


    return config
  },
})