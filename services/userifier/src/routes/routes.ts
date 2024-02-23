import { Server } from '@hapi/hapi';

export const addGetRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/user',
    handler: function (request, h) {
      return { firstName: 'John', lastName: 'Doe' };
    },
  });
};
