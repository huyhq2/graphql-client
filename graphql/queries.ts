import { gql } from "@apollo/client";

//TODO: pagination
export const BOOKS_QUERY = gql`
  query {
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

export const GET_BOOK_BY_ID_QUERY = gql`
  query getBook($id: ID!) {
    book(id: $id) {
      id
      genre
      name
      author {
        age
        id
        name
      }
    }
  }
`;

export const BOOKS_OF_AUTHOR_QUERY = gql`
  query getBooksOfAuthor($authorId: ID!) {
    booksOfAuthor(authorId: $authorId) {
      name
      id
      genre
    }
  }
`;
