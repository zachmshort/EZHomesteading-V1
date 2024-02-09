import { gql } from "@apollo/client";

export const QUERY_OPTIONS = gql`
  query getOptions {
    Options {
      _id
      name
      shelfLife
      suggestedPrice
      suggestedUnits
      productPic
    }
  }
`;
