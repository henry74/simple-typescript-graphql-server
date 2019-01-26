import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { merge } from "lodash";

/* tslint:disable:no-var-requires */
const modules = [require("./mutations"), require("./books")];

const mainDefs = [
  `
    type Query {
      dummy: String
    }
    
    type Mutation {
      dummy: String
    }
    
    type Subscription {
      dummy: String
    }
    
    schema {
      query: Query
      mutation: Mutation
      subscription: Subscription
    }
`
];

const resolvers = merge(
  modules.map(m => {
    if (m.resolvers) {
      return m.resolvers;
    }
  })
);

const typeDefs = mainDefs.concat(
  ...modules.map(m => m.typeDef).filter(res => !!res) // flatten with ...
);

const schema: GraphQLSchema = makeExecutableSchema({
  logger: console,
  allowUndefinedInResolve: false,
  resolverValidationOptions: {
    requireResolversForNonScalar: true,
    requireResolversForArgs: true
  },
  resolvers,
  typeDefs
});

export { schema };
