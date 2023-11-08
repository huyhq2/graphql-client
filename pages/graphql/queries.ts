import { gql } from "@apollo/client";

export const BOOKS_QUERY = gql`
  query books {
    books {
      id
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

export const GET_BOOK_QUERY = gql`
  query getBook($bookId: ID!) {
    book(id: $bookId) {
      id
      genre
      name
    }
  }
`;
