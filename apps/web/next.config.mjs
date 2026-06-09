/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/education',
        destination: '/outreach',
        permanent: true,
      },
      {
        source: '/collaborators',
        destination: '/people',
        permanent: true,
      },
      {
        source: '/research-papers',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/pis',
        destination: '/people',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
