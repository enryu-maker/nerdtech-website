/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images straight from the API host instead of routing them through
    // /_next/image. The optimizer fetches each image server-side from
    // pythonanywhere, and when that fetch fails/times out the browser just
    // shows a broken image (alt text + grey box).
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "nerdtech.pythonanywhere.com" },
    ],
  },
};

export default nextConfig;
