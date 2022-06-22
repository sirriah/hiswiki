/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['i.ibb.co'],
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
