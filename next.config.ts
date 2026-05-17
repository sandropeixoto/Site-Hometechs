import type {NextConfig} from 'next';

// Security headers reference — only works when output: 'export' is removed
// and the app is deployed on a Node.js server (e.g. Vercel, Cloud Run).
// For the current static/GitHub Pages deployment, equivalent headers are set
// via <meta> tags in app/layout.tsx.
//
// async headers() {
//   return [{
//     source: '/(.*)',
//     headers: [
//       { key: 'X-Frame-Options',          value: 'DENY' },
//       { key: 'X-Content-Type-Options',   value: 'nosniff' },
//       { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
//       { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=()' },
//       { key: 'Strict-Transport-Security',value: 'max-age=63072000; includeSubDomains; preload' },
//       { key: 'Content-Security-Policy',  value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://mail-proxy-has46dauxa-rj.a.run.app; frame-ancestors 'none'; font-src 'self' data:;" },
//     ],
//   }];
// },

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'export',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
