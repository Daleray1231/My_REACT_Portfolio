const { Projects } = require('../models');

const resolvers = {
  Query: {
    projects: async () => {
      return Projects.find({});
    },
  },
};

module.exports = resolvers;
