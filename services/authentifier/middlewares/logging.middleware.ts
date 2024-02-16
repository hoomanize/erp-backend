import morgan from 'morgan'

morgan.token('splitter', (req) => '\x1b[0m--------------------------------------------\x1b[0m\n')

morgan.token('statusColor', (req, res, args) => {
  const status = (typeof res.headersSent !== 'boolean' ? Boolean(res.header) : res.headersSent)
    ? res.statusCode
    : undefined

  const color =
    status >= 500 ? 31 : status >= 400 ? 31 : status >= 300 ? 36 : status >= 200 ? 32 : 0

  return '\x1b[' + color + 'm' + status + '\x1b[0m'
})

export const addLoggerMiddleware = (server) => {
  server.use(
    morgan(
      `:splitter\x1b[0m:method\x1b[0m \x1b[36m:url\x1b[0m :statusColor - :date[clf] - :response-time[2] ms -:user-agent`
    )
  )
}
