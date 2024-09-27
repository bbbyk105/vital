// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'assets.aceternity.com',
        'images.unsplash.com',
        // 他に使用する画像のドメインがあればここに追加
      ],
    },
  };
  
  module.exports = nextConfig;
  