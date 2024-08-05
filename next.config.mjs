/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DATABASE_HOST: 'host.docker.internal',
        DATABASE_USER:'nodeuser',
        DATABASE_PASSWORD :'8055',
        DATABASE_NAME :'lightbill'
    },
};

export default nextConfig;
