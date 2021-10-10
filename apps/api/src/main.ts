/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApolloServer } from 'apollo-server';
import { resolvers } from './app/resolvers';
import TrackAPI from './datasources/track-api';
import typeDefs from './schema';

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
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    trackAPI: new TrackAPI(),
  }),
  mocks: process.env.NX_USE_MOCKS === 'true' && mocks,
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url, port }) => {
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url} and maybe more
        Query at https://studio.apollographql.com/dev
  `);
});
