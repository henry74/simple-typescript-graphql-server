import { gql } from "apollo-server-express";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

export const typeDef = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolver = {
  Query: {
    books: (root, args, context) => books
  }
};
