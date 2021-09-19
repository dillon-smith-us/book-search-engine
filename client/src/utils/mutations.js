import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: SavedBook!) {
        saveBook (input: $input)
        {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            username
            email
            bookCount
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;