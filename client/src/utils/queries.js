import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query Products {
    Products {
      name
      shelfLife
      suggestedPrice
      suggestedUnits
      productPic
    }
  }
`;
// add description option
export const QUERY_ITEMS = gql`
  query Query {
    Items {
      category
    }
  }
`;
export const QUERY_USERS = gql`
  query Users {
    Users {
      address
      cart
      email
      hoursOfOperation
      profilePic
      userProducts
      userType
      username
    }
  }
`;
export const QUERY_USER = gql`
  query Query($userId: ID!) {
    User(userId: $userId) {
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
export const QUERY_ITEM = gql`
  query Item($itemId: ID!) {
    Item(itemId: $itemId) {
      _id
      category
      name
      price
      productPic
      quantityType
      shelfLife
      stock
      subCategory
      units
      userId
    }
  }
`;
export const QUERY_ITEM_BY_CAT = gql`
  query ItemsByCategory($category: String!) {
    itemsByCategory(category: $category) {
      _id
      category
      name
      price
      productPic
      quantityType
      shelfLife
      stock
      subCategory
      units
      userId
    }
  }
`;
export const QUERY_ITEM_BY_SUBCAT = gql`
  query ItemsBySubCategory($subCategory: String!) {
    itemsBySubCategory(subCategory: $subCategory) {
      _id
      category
      name
      price
      productPic
      quantityType
      shelfLife
      stock
      subCategory
      units
      userId
    }
  }
`;
