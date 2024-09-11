/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Sets security headers for all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
            "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://unsplash.com https://images.unsplash.com; script-src 'self' 'unsafe-inline'; font-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
