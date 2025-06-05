import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vaqybtnqyonvlwtskzmv.supabase.co',
        port: '',
        pathname: '/**'
      }
    ]
  },
  allowedDevOrigins: ['172.29.0.1'] // 添加你的IP或域名
}

export default nextConfig
