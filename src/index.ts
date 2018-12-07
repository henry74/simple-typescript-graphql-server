import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";

const app = express();

const context = {
  // add context objects here
};

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  formatError: error => {
    console.log(error);
    return new Error("Internal server error");
  }
});

const port = process.env.PORT || 4000;

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
