/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false, 
    experimental: {
      appDir: true, 
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.path = false;
      }
      return config;
    },
  };
  
  export default nextConfig;
  