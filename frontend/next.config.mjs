/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(ts|tsx)$/,
      use: 'ignore-loader',
    });
    return config;
  },
};

export default nextConfig;

