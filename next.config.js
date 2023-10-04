// next.config.js

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/videos/', // Output directory for videos
          },
        },
      });
  
      return config;
    },
  };
  