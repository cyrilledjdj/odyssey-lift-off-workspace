/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';

const mocks = {
  Query: () => ({
    getTracks: () => [... new Array(9)],
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6
  })
}

const server = new ApolloServer({ typeDefs, mocks });
server.listen().then(() => {
  console.log(`
    🚀 Server ready
    at http://localhost:4000
    Query at https://studio.apollographql.com/dev
  `);
});
