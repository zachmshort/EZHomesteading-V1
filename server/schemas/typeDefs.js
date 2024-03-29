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
    isCoop : Boolean
    isProducer : Boolean
    phoneNumber: String
    city: String
    state: String
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
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
    userId: String
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
    addCartItem(userId: String!, itemId: String!, cart: [String]!): User
    deleteCartItem(userId: String!, itemId: String!): User
    addProductItem(userId: String!, itemId: String!, userProducts: [String]!): User
    deleteProductItem(userId: String!, itemId: String!): User
    addUser(username: String!, password: String!, email: String!): Auth
    login(email: String!, password: String!): Auth

    updateUser(username: String!, profilePic: String, password: String, email: String, address: String, hoursOfOperation: String, isCoop: Boolean, isProducer:Boolean): User

    deleteUser(userId: ID!): User
    addItem(name: String!, category: String!, subCategory: String!, quantityType: String!, stock: Int!, shelfLife: Int, price: Float!, userId: String!): Item
    updateItem(itemId: String!, name: String!, quantityType: String!, stock: Int!, shelfLife: Int!, price: Float!): Item
  }
`;

module.exports = typeDefs;
