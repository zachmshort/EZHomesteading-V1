const typeDefs = `
  type Product {
    _id: ID
        name: String
        shelfLife : String
        suggestedPrice : Int
        suggestedUnits : Int
        productPic : String
  }

  type Query {
    Product: [Product]!
  }

  type Mutation {
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
