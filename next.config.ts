import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // General redirects with dynamic paths
      {
        source: '/endemit-festival/:path*',
        destination: '/events/endemit-festival/:path*',
        permanent: true,
      },
      {
        source: '/ius-primae-noctis/:path*',
        destination: '/events/ius-primae-noctis/:path*',
        permanent: true,
      },

      // Specific one - to - one
      {
        source: '/endemit-festival/map',
        destination: '/events/endemit-festival/map-and-timetable',
        permanent: true,
      },
      {
        source: '/festival',
        destination: '/events/endemit-festival',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
