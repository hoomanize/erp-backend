const ROUTES = [
    {
        url: '/check',
        auth: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://localhost",
            changeOrigin: true,
            pathRewrite: {
                [`^/check`]: '',
            },
        }
    },
    {
        url: '/check-auth',
        auth: true,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://localhost",
            changeOrigin: true,
            pathRewrite: {
                [`^/check-auth`]: '',
            },
        }
    }
    ]

module.exports = {ROUTES};