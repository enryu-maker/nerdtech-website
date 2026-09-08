/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nerdtech.pythonanywhere.com",
      },
    ],
  },
};

export default nextConfig;
