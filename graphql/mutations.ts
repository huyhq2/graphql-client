import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation createBook($data: BookInput!) {
    createBook(data: $data) {
      id
      name
      genre
    }
  }
`;
