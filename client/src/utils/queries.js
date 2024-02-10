import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query Products {
    Products {
      _id
      name
      shelfLife
      suggestedPrice
      suggestedUnits
      productPic
    }
  }
`;
