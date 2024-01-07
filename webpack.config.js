module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "http": require.resolve("stream-http"),
      "fs": false,  // Set to false if you don't want to include a polyfill for 'fs'
    },
  },
};
