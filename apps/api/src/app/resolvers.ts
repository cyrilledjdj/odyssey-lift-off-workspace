export const resolvers = {
  Query: {
    getTracks: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracks();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
    author: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(id);
    },
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};
