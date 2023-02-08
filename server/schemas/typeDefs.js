const typeDefs =`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Book {
        bookId: String
        authors: [Author]
        description: String
        image: String
        link: String
        title: String

    }

    type Author {
        name: String
    }

    type Auth {
        token: ID
        user: User
    }

    input BookInput {
        bookId: String
        authors: String
        description: String
        image: String 
        link: String
        title: String
    }

    type Query {
        me: User

    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(_id: ID!, input: BookInput): User
        removeBook(_id: ID!, bookId: String!): User
    }
`;

module.exports = typeDefs