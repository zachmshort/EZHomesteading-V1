const typeDefs = `
  type Product {
    _id: ID
    name: String
    category: String
    subCategory: String
    shelfLife : Int
    suggestedPrice : Float
    suggestedUnits : String
    productPic : String
  }
  
  type User {
    _id: ID
    profilePic: String
    username: String
    password: String
    email : String
    userProducts : [String]
    address : String
    hoursOfOperation : String
    cart : [String]
    transactionHistory : [String]
    userType : String
  }

  type Item{
    _id: ID
    name: String
    category: String
    subCategory: String
    quantityType: String
    stock: Int
    units: String
    shelfLife: Int
    productPic: String
    price: Float
}

  type Query {
    Products: [Product]!
    Items: [Item]!
    Item(itemId: ID!): Item
    Users: [User]!
    User(userId: ID!): User
    itemsByCategory(category: String!): [Item]!
    itemsBySubCategory(subCategory: String!): [Item]!
  }

  type Mutation {
    addUser(username: String!, password: String!, email: String!): User
    addItem(name: String!, species: String!, quantityType: String!, stock: Int!, shelfLife: Int, price: Float!): Item
    
  }
`;

module.exports = typeDefs;
