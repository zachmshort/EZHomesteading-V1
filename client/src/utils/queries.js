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
export const QUERY_ITEMS = gql`
  query Query {
    Items {
      category
      name
      price
      productPic
      quantityType
      shelfLife
      stock
      subCategory
      units
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
