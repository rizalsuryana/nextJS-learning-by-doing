import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Image
    images:{
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com'
      }
     ]
  },

}

export default nextConfig;
