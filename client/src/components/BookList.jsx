import { gql, useQuery } from '@apollo/client';

const getBookQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { data, error, loading } = useQuery(getBookQuery);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  console.log(data);

  return (
    <div>
      <ul className="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default BookList;
