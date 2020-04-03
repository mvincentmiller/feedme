// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('queue_database', 'queue', 'queue', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 9,
//     min: 0,
//     idle: 10000
//   }
// });

// sequelize.authenticate().then(() => {
//   console.log("Success!");
// }).catch((err) => {
//   console.log(err);
// });

const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
 
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new Koa();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
