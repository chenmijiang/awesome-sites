/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/ai',
  //       destination: '/ai/aHR0cHM6Ly93d3cucGhpbmQuY29tLw=='
  //     }
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cn.bing.com',
        port: '',
        pathname: '/th'
      }
    ]
  }
}

module.exports = nextConfig
