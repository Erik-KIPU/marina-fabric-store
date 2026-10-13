const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/marina-fabric-store' : '';
const nextConfig = {
  distDir: isProd ? '.next' : '.next-dev',
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: '**' }] }
};
module.exports = nextConfig;
