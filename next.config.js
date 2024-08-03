/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mapbox.com",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/*": ["./content/space/**/*"],
    },
  },
};

module.exports = nextConfig;
