/** @type {import('next').NextConfig} */
const webpack = require('webpack');

module.exports = {
  compiler:{styledComponents: true},
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      }),
    );
    return config;
  }
}
