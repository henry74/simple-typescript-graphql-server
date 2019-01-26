import { gql } from "apollo-server-express";
import logger from "../../util/logger";

export const typeDef = gql`
  # Mutations
  extend type Mutation {
    addBooks(title: String!): String
  }
`;

export const resolvers = {
  Mutation: {
    addBooks: async (root, { title }, context) => {
      const response = `Add book with title: ${title}`;
      logger.debug(response);
      return response;
    }
  }
};
