/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript:{
      ignoreBuildErrors: true,
    },
    experimental: {
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: [
        "img.clerk.com",
        "images.clerk.dev",
        "uploadthing.com",
        "placehold.co",
      ],
    },
  };
  
  module.exports = nextConfig;
  