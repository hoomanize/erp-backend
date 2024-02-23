import Hapi, { Server } from '@hapi/hapi';
import Http2 from 'http2';
import fs from 'fs';

import { addResponseLoggerMiddleware } from './middlewares/response-logging.middleware';

const PORT = 3001;
const HOST = 'localhost';

const serversOptions = {
  key: fs.readFileSync('../../common/ssl-certificates/self-cert.key'),
  cert: fs.readFileSync('../../common/ssl-certificates/self-cert.crt'),
};

const addMiddlewares = async (server: Server) => {
  await addResponseLoggerMiddleware(server);
};

export const initServer = async () => {
  const server = new Hapi.Server({
    // @ts-ignore
    listener: Http2.createSecureServer(serversOptions),
    port: PORT,
    host: HOST,
    tls: true,
  });

  await addMiddlewares(server);

  return server;
};

export const startServer = async (server: Server) => {
  try {
    await server.start();
  } catch (error) {
    console.log(`[\x1b[31mERROR\x1b[0m] server starts aboarted: ${HOST}:${PORT}`);
    return;
  }

  console.log(`[\x1b[36mINFO\x1b[0m] server started: ${HOST}:${PORT}`);
};
