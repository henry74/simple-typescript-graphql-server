import { gql } from "apollo-server-express";

export const typeDef = gql`
  extend type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
  Query: {
    books: (root, args, context) => [
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling"
      },
      {
        title: "Jurassic Park",
        author: "Michael Crichton"
      }
    ]
  }
};
