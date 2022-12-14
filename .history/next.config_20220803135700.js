/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 사용자소스 이미지 도메인 정보가있어야됨 바깥에서 들어오는 도메인정보들을 등록을 해줘야된다 다른것을 가져올때에도
  images: {
    domains: ['www.notion.so'],
  },
};

module.exports = nextConfig;