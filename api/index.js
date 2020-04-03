const { ApolloServer, gql } = require("apollo-server");
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;
const order = require('./models/order');
const {resolver} = require('graphql-sequelize');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    order(order_id: ID!): Order
    orders: [Order]
  }
  
  type Order {
    order_id: ID
    customer_id: String,
    employee_id: Int,
    order_date: String,
    required_date: String,
    shipped_date: String,
    ship_via: Int,
    freight: Float,
    ship_name: String,
    ship_address: String,
    ship_city: String,
    ship_region: String,
    ship_postal_code: String,
    ship_country: String,
  }
`;
 
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    order: resolver(order),
    orders: resolver(order,{list: true})
  },
};
 
const server = new ApolloServerLambda({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
  }),
});

exports.handler = server.createHandler({
  cors: {
      origin: '*',
      credentials: true,
      allowedHeaders: 'Content-Type, Authorization'
  },
});

// For local development
if( process.env.LAMBDA_LOCAL_DEVELOPMENT == "1") {
  const serverLocal = new ApolloServer({ typeDefs, resolvers });

  serverLocal.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });
}
