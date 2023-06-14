/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      type: "asset/resource",
    });

    return config;
  },
};
