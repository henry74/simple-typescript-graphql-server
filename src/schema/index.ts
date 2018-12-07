import { GraphQLSchema } from "graphql";
import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";

/* tslint:disable:no-var-requires */
const modules = [require("./queries/query"), require("./mutations/mutation")];

const mainDefs = [
  `
    schema {
        query: Query,
        mutation: Mutation
    }
`
];

const resolvers = modules.reduce((state, m) => {
  if (!m.resolver) {
    return state;
  }

  return {
    ...state,
    ...m.resolver
  };
}, {});

const typeDefs = mainDefs.concat(
  modules.map(m => m.typeDef).filter(res => !!res)
);

const schema: GraphQLSchema = makeExecutableSchema({
  logger: console,
  resolverValidationOptions: {
    requireResolversForNonScalar: false
  },
  resolvers,
  typeDefs
});

addMockFunctionsToSchema({
  mocks: {},
  preserveResolvers: true,
  schema
});

export { schema };
