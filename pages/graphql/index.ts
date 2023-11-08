// import { gql } from "@/lib/apolloGraphql/__generated__";
import { client } from "@/lib/apolloGraphql/apolloClient";
import { gql } from "@apollo/client";

export const getBooks = async () => {
  const result = await client.query({
    query: gql`
      query myQuery {
        books {
          name
        }
      }
    `,
  });

  return result;
};
