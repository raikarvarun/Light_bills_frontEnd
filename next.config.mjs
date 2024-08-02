/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_HOST: '127.0.0.1',
        DATABASE_USER:'nodeuser',
        DATABASE_PASSWORD :'8055',
        DATABASE_NAME :'lightbill'
    },
};

export default nextConfig;
