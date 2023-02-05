const typeDefs = `
    type User {
        _id: ID!
        username: String!
        password: String!
    }
    
    type Book {
        bookId: String!
        authors: String
        description: String!
        image: String
        link: String
        title: String!

    }

    type Query {
        users: [User]
        books: [Book]
    }
`;

module.exports = typeDefs