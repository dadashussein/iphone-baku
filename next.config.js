/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["e-ticaret-dadas.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
