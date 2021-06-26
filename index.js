const NodeMediaServer = require('node-media-server');
const { config } = require('./src/config');

const nodeMediaServerConfig = {
  rtmp: {
    port: config.RTMP.PORT,
    chunk_size: config.RTMP.CHUNK_SIZE,
    gop_cache: config.RTMP.GOP_CACHE,
    ping: config.RTMP.PING,
    ping_timeout: config.RTMP.PING_TIMEOUT
  },
  http: {
    port: config.HTTP.PORT,
    allow_origin: config.HTTP.ALLOW_ORIGIN
  }
};

var nms = new NodeMediaServer(nodeMediaServerConfig)
nms.run();