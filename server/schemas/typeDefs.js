// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Auth {
    token: ID!
    user: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    image: String
    title: String
    link: String
  }

  type Query {
    me: User
  }

  input savedBookinput {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBookinput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;