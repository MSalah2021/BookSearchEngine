const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userById(_id: ID!): User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveBook(input: BookData!): User
    deleteBook(bookId: String!): User
  }

  input BookData {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
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
    title: String
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
