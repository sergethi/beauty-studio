/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Sets security headers for all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://nextui.org https://i.pravatar.cc; script-src 'self' 'unsafe-eval' 'unsafe-inline'; font-src 'self'; frame-src 'self' https://www.google.com/",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://www.google.com ",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(self),  browsing-topics=(self), geolocation=(self), microphone=(self)",
            //Empty brackets are used to define that we are denying them..
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
