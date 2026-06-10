/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig
