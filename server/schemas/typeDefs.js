const typeDefs = `
  type Project {
    _id: ID!
    name: String!
  }

  type Query {
    projects: [Project]
  }
`;

module.exports = typeDefs;
