/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.myanimelist.net'],
    loader: 'custom',
    path: '/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: '@svgr/webpack',
    });
    return config;
  },
};

module.exports = nextConfig;
