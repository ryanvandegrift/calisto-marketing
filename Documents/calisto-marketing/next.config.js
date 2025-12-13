/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['calistomedia.blob.core.windows.net'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
