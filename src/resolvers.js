module.exports = {
  Query: {
    random: async (_source, {}, { dataSources }) => {
      return dataSources.senpyAPI.getRandom();
    },
    languages: async (_source, {}, { dataSources }) => {
      return dataSources.senpyAPI.getLanguages();
    },
    language: async (_source, { language }, { dataSources }) => {
      return dataSources.senpyAPI.getLanguage(language);
    },
    me: async (_source, {}, { dataSources }) => {
      return dataSources.senpyAPI.getMe();
    },
    boys: async (_source, {}, { dataSources }) => {
      return {
        random: dataSources.senpyAPI.getBoysRandom(),
        languages: dataSources.senpyAPI.getBoysLanguages(),
        language: ({ language }) => dataSources.senpyAPI.getBoysLanguage(language),
      };
    },
  },
};
