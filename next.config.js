/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cn.bing.com',
        port: '',
        pathname: '/th',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            extract: false,
          },
        },
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              {
                name: 'removeAttrs',
                params: {
                  attrs: 'fill',
                },
              },
            ],
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
