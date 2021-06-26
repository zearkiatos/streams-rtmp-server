require('dotenv').config();

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT || 5000,
    RTMP: {
        PORT: process.env.RTMP_PORT,
        CHUNK_SIZE: process.env.RTMP_CHUNK_SIZE,
        GOP_CACHE: process.env.RTMP_GOP_CACHE === 'true',
        PING: process.env.RTMP_PING,
        PING_TIMEOUT: process.env.RTMP_PING_TIMEOUT
    },
    HTTP: {
        PORT: process.env.PORT,
        ALLOW_ORIGIN: process.env.HTTP_ALLOW_ORIGIN
    }
};

module.exports = { config };