/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'main.bkarogyam.com',
      },
      {
        protocol: 'https',
        hostname: 'healdiway.bkarogyam.com',
      },
      {
        protocol: 'https',
        hostname: 'bkarogyam.com',
      },
      {
        protocol: 'https',
        hostname: 'bk-erp-file.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'ccmorg.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // ✅ Add this for Unsplash images
      },
    ],
  },
}

module.exports = nextConfig