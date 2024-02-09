const typeDefs = `
  type Product {
    _id: ID
    name: String
    shelfLife : String
    suggestedPrice : Int
    suggestedUnits : String
    productPic : String
  }
  type User {
    _id: ID
    profilePic: String
    username: String
    password: String
    email : String
    userProducts : [String]!
    address : String
    hoursOfOperation : String
    cart : [String]!
    transactionHistory : [String]!
    userType : String
  }

  type Query {
    Products: [Product]!
  }
`;

module.exports = typeDefs;
