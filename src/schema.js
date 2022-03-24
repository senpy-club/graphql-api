const { gql } = require("apollo-server-cloudflare");

module.exports = gql`
  type Random {
    language: String!
    image: String!
  }
  
  type Me {
    ip: String!
  }
  
  type Boys {
    random: Random!
    languages: [String!]!
    language(language: String!): [String!]!
  }

  type Query {
    random: Random!
    languages: [String!]!
    language(language: String!): [String!]!
    me: Me!
    boys: Boys!
  }
`;
