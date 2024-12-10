/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures the project works in export mode
  images: {
    unoptimized: true, // Disables Image Optimization API
  },
};

module.exports = nextConfig;
