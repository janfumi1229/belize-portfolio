/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 允許從外部 URL 載入圖片（demo 用的 placeholder 來源）
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
