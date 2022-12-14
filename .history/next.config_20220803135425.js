/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 사용자소스 이미지 도메인
  images: {
    domains: ['www.notion.so'],
  },
};

module.exports = nextConfig;
