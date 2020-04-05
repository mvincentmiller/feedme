const { ApolloServer, gql } = require("apollo-server");
const ApolloServerLambda = require('apollo-server-lambda').ApolloServer;
const {resolver} = require('graphql-sequelize');
const { User } = require('./models')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()



 // Define our schema using the GraphQL schema language
 const typeDefs = `
 type User {
   id: Int!
   username: String!
   email: String!
 }
 type Query {
   me: User
   users: [User]
  }
 type Mutation {
   signup (username: String!, email: String!, password: String!): String
   login (email: String!, password: String!): String
 }
`

const resolvers = {
  Query: {
    users: resolver(User,{list: true}),
    // fetch the profile of currently authenticated user
    async me (_, args, { user }) {
      console.log(user)
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      // user is authenticated
      return await User.findById(user.id)
    }
  },

  Mutation: {
    // Handle user signup
    async signup (_, { username, email, password }) {
      const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, 10)
      })

      // return json web token
      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1y' }
      )
    },

    // Handles user login
    async login (_, { email, password }) {
      const user = await User.findOne({ where: { email } })

      if (!user) {
        throw new Error('No user with that email')
      }

      const valid = await bcrypt.compare(password, user.password)

      if (!valid) {
        throw new Error('Incorrect password')
      }

      // return json web token
      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      )
    }
  }
}


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