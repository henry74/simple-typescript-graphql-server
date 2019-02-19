import * as express from "express";
import * as compression from "compression";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import logger from "./util/logger";

const app = express();
app.use(compression());
const context = {
  // add context objects here
};

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  formatError: error => {
    logger.error(error);
    return new Error("Internal server error");
  }
});

const port = process.env.PORT || 4000;

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port }, () =>
  logger.info(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
