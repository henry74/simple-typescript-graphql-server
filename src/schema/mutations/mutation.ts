import { gql } from "apollo-server-express";
import logger from "../../util/logger";

export const typeDef = gql`
  # Mutations
  extend type Mutation {
    setFakeStatus(status: String!): String
  }
`;

export const resolvers = {
  Mutation: {
    setFakeStatus: async (root, args, context) => {
      const response = `Set status to ${args.status}`;
      logger.debug(response);
      return response;
    }
  }
};
