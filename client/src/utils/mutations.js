import { gql } from '@apollo/client'

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
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
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
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
    mutation saveBook($bookData: BookInput) {
        saveBook(bookData: $bookData ) {
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

export const REMOVE_BOOK = gql`
    mutation removeBook($_id: ID!, $bookId: String!) {
        removeBook(_id: $_id, bookId: $bookId) {
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

