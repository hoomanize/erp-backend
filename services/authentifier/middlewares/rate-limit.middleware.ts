import rateLimit from 'express-rate-limit';

export const addRateLimitingMiddleware = (server, routes) => {
    routes.forEach(route => {
        server.use(route.url, rateLimit(route.rateLimit));
    });
};