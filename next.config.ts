import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/festival',
        destination: '/events/endemit-festival',
        permanent: true,
      },
      {
        source: '/endemit-festival/map',
        destination: '/events/endemit-festival/map-and-timetable',
        permanent: true,
      },
      {
        source: '/endemit-festival',
        destination: '/events/endemit-festival',
        permanent: true,
      },
      {
        source: '/ius-primae-noctis',
        destination: '/events/ius-primae-noctis',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
