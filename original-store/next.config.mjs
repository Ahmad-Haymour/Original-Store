import os from 'os';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [ 'res.cloudinary.com', 'images.unsplash.com', ],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: os.hostname(),
            pathname: '**',
        }
    ],
  },
};

export default nextConfig;
