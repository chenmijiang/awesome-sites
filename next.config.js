/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ]
  },
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
}

module.exports = nextConfig
