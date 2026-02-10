/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'brand',
            value: 'ar',
          },
        ],
        destination: '/brands/ar-perfumes',
        permanent: true,
      },
      {
        source: '/old-ar-home',
        destination: '/brands/ar-perfumes',
        permanent: true,
      },
      {
        source: '/products',
        destination: '/brands/ar-perfumes',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/brands/ar-perfumes',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/brands/ar-perfumes',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
