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
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      const track = await dataSources.trackAPI.incrementTrackViews(id);
      return {
        code: 200,
        success: true,
        message: `Track views incremented successfully for ${id}`,
        track,
      };
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
