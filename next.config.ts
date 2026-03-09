// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "images.unsplash.com",
//       "www.kokilabenhospital.com",
//       "drpoojaonco.com",
//       "regalhospital.com",
//     ],
//   },
// };

// module.exports = nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'bk-erp-file.s3.amazonaws.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'regalhospital.com',
//       },
//     ],
//   },
// }

// module.exports = nextConfig






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'bk-erp-file.s3.amazonaws.com',
//       'ccmorg.in'
//     ],
//   },
// };

// module.exports = nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bkarogyam.com',
        port: '',
        pathname: '/**',
      },
      // आपके पहले से मौजूद अन्य डोमेन
      {
        protocol: 'https',
        hostname: 'bk-erp-file.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'healdiway.bkarogyam.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'main.bkarogyam.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ccmorg.in',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;