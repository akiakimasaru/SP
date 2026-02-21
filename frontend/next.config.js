/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // Vercelでのデプロイ時に最適化
  images: {
    domains: [],
  },
  // 国際化設定（日本語）
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
}

module.exports = nextConfig
