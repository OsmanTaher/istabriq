/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-e12827655f16445aa550b52e498084bc.r2.dev',
      },
    ],
  },
};
export default nextConfig;