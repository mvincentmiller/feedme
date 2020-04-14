 // Define our schema using the GraphQL schema language
 const {resolver} = require('graphql-sequelize');
 const { User } = require('./models')
 const bcrypt = require('bcrypt')
 const jsonwebtoken = require('jsonwebtoken')

export const typeDefs = `
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

export const resolvers = {
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