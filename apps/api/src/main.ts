/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as cors from 'cors';
import { resolvers } from './app/resolvers';
import TrackAPI from './datasources/track-api';
import typeDefs from './schema';
import path = require('path');

const mocks = {
  Query: () => ({
    getTracks: () => [...new Array(9)],
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    durationInSeconds: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer(typeDefs, resolvers) {
  // Same ApolloServer initialization as before
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      trackAPI: new TrackAPI(),
    }),
    mocks: process.env.NX_USE_MOCKS === 'true' && mocks,
  });

  // Required logic for integrating with Express
  await server.start();

  const app = express();
  app.use(cors());
  app.use('/ng', express.static('dist/apps/ng-lift-off'));
  app.get('/ng/*', (_, res) => {
    res.sendFile(path.join(__dirname, '../ng-lift-off/index.html'));
  });
  app.use('/', express.static('dist/apps/odyssey-lift-off'));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../odyssey-lift-off/index.html'));
  });
  server.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/api',
  });

  // Modified server startup
  app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`
      🚀  Server is running
      🔉  Listening on port ${process.env.PORT || 4000}
      📭  Query at ${server.graphqlPath}
    `);
  });
}

startApolloServer(typeDefs, resolvers);
