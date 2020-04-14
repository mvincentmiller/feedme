import  { ApolloServer, gql } from 'apollo-server';
// import Koa from 'koa'
// import cors from '@koa/cors'
// import bodyParser from 'koa-bodyparser';
// import { ApolloServer, gql } from 'apollo-server-koa';
require('dotenv').config()
import {typeDefs, resolvers } from './gql.js'

// const server = new ApolloServerLambda({
//   typeDefs,
//   resolvers,
//   context: ({ event, context }) => ({
//       headers: event.headers,
//       functionName: context.functionName,
//       event,
//       context,
//   }),
// });

// exports.handler = server.createHandler({
//   cors: {
//       origin: '*',
//       credentials: true,
//       allowedHeaders: 'Content-Type, Authorization'
//   },
// });

// For local development
if( process.env.LAMBDA_LOCAL_DEVELOPMENT == "1") {

  // const server = new ApolloServer({ typeDefs, resolvers,

  //   // context: ({ ctx }) => {
  //   //   // Note! This example uses the `req` object to access headers,
  //   //   // but the arguments received by `context` vary by integration.
  //   //   // This means they will vary for Express, Koa, Lambda, etc.!
  //   //   //
  //   //   // To find out the correct arguments for a specific integration,
  //   //   // see the `context` option in the API reference for `apollo-server`:
  //   //   // https://www.apollographql.com/docs/apollo-server/api/apollo-server/
   
  //   //   // Get the user token from the headers.
  //   //   const token = ctx.headers.authorization || '';
   
  //   //   // try to retrieve a user with the token
  //   //   const user = getUser(token);
   
  //   //   // add the user to the context
  //   //   return { user };
  //   // }
  // });

  // const app = new Koa();

  // app.use(cors());
  // app.use(bodyParser());
  // server.applyMiddleware({ app });
  // // alternatively you can get a composed middleware from the apollo server
  // // app.use(server.getMiddleware());
  
  // app.use(async (ctx, next) => {
  //   // the parsed body will store in ctx.request.body
  //   // if nothing was parsed, body will be an empty object {}
  //   //ctx.body = ctx.request.body;
  //   // console.log(ctx.body)
  //  await next()
  // });

  // app.listen({ port: 4000 }, () =>
  //   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  // );

  const serverLocal = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    // context: ({ req }) => {
    //   console.log('req')
    //   // get the user token from the headers
    //   const token = req.headers.authorization || '';
    //   console.log('token?', token)
    //   // try to retrieve a user with the token
    //   const user = getUser(token);
    //   console.log('user?', user)
    //   // optionally block the user
    //   // we could also check user roles/permissions here
    //   if (!user) throw new AuthenticationError('you must be logged in'); 
     
    //   // add the user to the context
    //   return { user };
    // },
  
   });

  serverLocal.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
  });

}