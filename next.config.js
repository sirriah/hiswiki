/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
  reactStrictMode: true,
  webpack: (config) => {
    const appConfig = { ...config };
    appConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return appConfig;
  },
};
