const path = require('path');

module.exports = {
  // Other Webpack configuration
  resolve: {
    fallback: {
        "http": require.resolve("stream-http"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,  // If fs is not needed in the client-side code
      "stream": require.resolve("stream-browserify"),
      "net": false, // If net is not needed in the client-side code
      "http": false
    }
  }
};
