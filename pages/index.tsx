import { gql } from "@apollo/client";
import {createApolloClient} from '../lib/apolloClient';

export async function getStaticProps() {
  const client = createApolloClient();
  const {data} = await client.query({query: gql`query myQuery {
    books {
    name
    }
  }`})

  return {
    props: {
      books: data.books,
    },
  };
}

function Dashboard({books}:any) {
  console.log(books)
  

  return (
    <div>Dashboard 1</div>
  )
}

export default Dashboard