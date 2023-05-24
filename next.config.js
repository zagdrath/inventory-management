/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mdcop.weidmueller.com',
                port: '',
                pathname: '/mediadelivery/rendition/**',
            },
        ],
    }
};

module.exports = nextConfig;