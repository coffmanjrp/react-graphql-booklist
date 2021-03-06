import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetail = () => {
  const { data, error, loading } = useQuery(getBookQuery);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="book-details">
        <p>Output book details here</p>
      </div>
    </div>
  );
};

export default BookDetail;
