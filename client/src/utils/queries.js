import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getProducts {
    Product {
      _id
      name
      shelfLife
      suggestedPrice
      suggestedUnits
      productPic
    }
  }
`;
