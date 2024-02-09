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

  type Item{
    _id: ID
    name: String
    species: String
    quantityType: String
    stock: Int
    shelfLife: String
    productPic: String
    price: Int  
}

  type Query {
    Products: [Product]!
    Items: [Item]!
    Item: [Item]!
    Users: [User]!
    User: [User]!
  }
`;

module.exports = typeDefs;
