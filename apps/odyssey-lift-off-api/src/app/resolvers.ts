export const resolvers = {
  Query: {
    getTracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};
