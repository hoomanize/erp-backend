import express from 'express';

import {addLoggerMiddleware} from "./middlewares/logging.middleware";
import {addProxyMiddleware} from "./middlewares/proxy.middleware";
import {addRateLimitingMiddleware} from "./middlewares/rate-limit.middleware";

import {ROUTES} from './routes.js';

const PORT = 3000;

const server = express();

addLoggerMiddleware(server);
// addProxyMiddleware(server, ROUTES);
addRateLimitingMiddleware(server, ROUTES);

server.get('/check', (req, res) => {
    return res.send('Check');
})

server.listen(PORT, () => {
    console.log('Listening on port 3000');
})