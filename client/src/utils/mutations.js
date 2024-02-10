export const ADD_TO_CART = gql`
  mutation Mutation($userId: String!, $itemId: String!, $cart: [String]!) {
    addCartItem(userId: $userId, itemId: $itemId, cart: $cart) {
      cart
      username
    }
  }
`;
export const ADD_NEW_ITEM = gql`
  mutation Mutation(
    $name: String!
    $category: String!
    $subCategory: String!
    $quantityType: String!
    $stock: Int!
    $price: Float!
    $userId: String!
    $shelfLife: Int
  ) {
    addItem(
      name: $name
      category: $category
      subCategory: $subCategory
      quantityType: $quantityType
      stock: $stock
      price: $price
      userId: $userId
      shelfLife: $shelfLife
    ) {
      name
      price
      productPic
      quantityType
      stock
      shelfLife
      units
    }
  }
`;
export const ADD_PRODUCT_ITEM = gql`
  mutation Mutation(
    $userId: String!
    $itemId: String!
    $userProducts: [String]!
  ) {
    addProductItem(
      userId: $userId
      itemId: $itemId
      userProducts: $userProducts
    ) {
      userProducts
    }
  }
`;
export const ADD_USER = gql`
  mutation Mutation($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      _id
      address
      cart
      email
      hoursOfOperation
      password
      profilePic
      transactionHistory
      userProducts
      userType
      username
    }
  }
`;
export const DELETE_FROM_CART = gql`
  mutation Mutation($userId: String!, $itemId: String!) {
    deleteCartItem(userId: $userId, itemId: $itemId) {
      cart
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation Mutation($userId: String!, $itemId: String!) {
    deleteProductItem(userId: $userId, itemId: $itemId) {
      userProducts
    }
  }
`;
export const DELETE_USER = gql`
  mutation Mutation($deleteUserUserId2: ID!) {
    deleteUser(userId: $deleteUserUserId2) {
      _id
      username
    }
  }
`;
export const UPDATE_ITEM = gql`
  mutation Mutation(
    $itemId: String!
    $name: String!
    $quantityType: String!
    $stock: Int!
    $shelfLife: Int!
    $price: Float!
  ) {
    updateItem(
      itemId: $itemId
      name: $name
      quantityType: $quantityType
      stock: $stock
      shelfLife: $shelfLife
      price: $price
    ) {
      _id
      name
      quantityType
      stock
      shelfLife
      price
    }
  }
`;
export const UPDATE_USER = gql`
  mutation Mutation(
    $userId: ID!
    $profilePic: String!
    $username: String!
    $password: String!
    $email: String!
    $address: String!
    $hoursOfOperation: String!
    $userType: String!
  ) {
    updateUser(
      userId: $userId
      profilePic: $profilePic
      username: $username
      password: $password
      email: $email
      address: $address
      hoursOfOperation: $hoursOfOperation
      userType: $userType
    ) {
      _id
      profilePic
      username
      userType
      hoursOfOperation
      email
      address
    }
  }
`;
