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
};

module.exports = nextConfig;
