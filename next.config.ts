import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'cms.shelleyandblaine.com', 'seal-nwfl.bbb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**'
      }
    ]
  },
  experimental: {
    reactCompiler: true
  }
}

export default nextConfig
