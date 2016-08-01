module.exports = {
    // configuration
    module: {
       loaders: [
          {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
          {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
          {test: /\.css$/, loader: 'style-loader!css-loader'},
          {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
       ]
   }
};
