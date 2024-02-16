import {createProxyMiddleware} from 'http-proxy-middleware';

export const addProxyMiddleware = (server, routes) => {
   routes.forEach(route => {
       server.use(route.url, createProxyMiddleware(route.proxy));
   });
};