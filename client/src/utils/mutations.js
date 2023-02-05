import { gql } from '@apollo/client'

export const Login_USER = gql `
    mutation login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String, $email: String, $password: String) {
        addUser(username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($BookData: BookInput) {
        saveBook(BookData: $BookData) {
            _id
            username
            email
            savedBooks {
                bookID
                title
                authors
                image
                description
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID) {
        removeBook(bookID: $bookId) {
            _id
            username
            email
            savedBooks {
                bookId
                title
                authors
                image
                description
                link
            }
        }
    }
`;
