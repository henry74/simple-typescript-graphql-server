import { gql } from "apollo-server-express";

export const typeDef = gql`
  # Mutations
  type Mutation {
    setFakeStatus(status: String!): String
  }
`;

export const resolver = {
  Mutation: {
    async setFakeStatus(root, args, context) {
      const response = `Set status to ${args.status}`;
      console.log(response);
      return response;
    }
  }
};
