import { createProxyMiddleware } from 'http-proxy-middleware'

export const addProxyMiddleware = (app, routes) => {
  routes.forEach((route) => {
    app.use(route.url, createProxyMiddleware(route.proxy))
  })
}
