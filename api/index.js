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
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = new Koa();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
