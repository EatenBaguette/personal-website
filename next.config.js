/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    async headers() {
        return [
            // Serve Unity WebGL compressed assets with proper Content-Encoding and MIME types
            {
                source: '/Aerylect/Build/(.*)\\.data\\.br',
                headers: [
                    { key: 'Content-Type', value: 'application/octet-stream' },
                    { key: 'Content-Encoding', value: 'br' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            },
            {
                source: '/Aerylect/Build/(.*)\\.wasm\\.br',
                headers: [
                    { key: 'Content-Type', value: 'application/wasm' },
                    { key: 'Content-Encoding', value: 'br' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            },
            {
                source: '/Aerylect/Build/(.*)\\.framework\\.js\\.br',
                headers: [
                    { key: 'Content-Type', value: 'application/javascript' },
                    { key: 'Content-Encoding', value: 'br' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            },
            {
                // In case Unity emitted other compressed JS files
                source: '/Aerylect/Build/(.*)\\.js\\.br',
                headers: [
                    { key: 'Content-Type', value: 'application/javascript' },
                    { key: 'Content-Encoding', value: 'br' },
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
