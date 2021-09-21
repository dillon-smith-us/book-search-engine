// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
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
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBook): User
        removeBook(bookId: String!): User
    }
    type Query {
        me: User
    }
    input SavedBook {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
`;

// export the typeDefs
module.exports = typeDefs;