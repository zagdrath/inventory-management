/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
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