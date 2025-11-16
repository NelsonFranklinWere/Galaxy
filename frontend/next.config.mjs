/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

