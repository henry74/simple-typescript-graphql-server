import { gql } from "apollo-server-express";

export const typeDef = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }
`;
