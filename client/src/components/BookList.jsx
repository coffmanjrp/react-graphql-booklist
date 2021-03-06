import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetail from './BookDetail';

const BookList = () => {
  const { data, error, loading } = useQuery(getBooksQuery);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <ul className="book-list">
        {data.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
      <BookDetail />
    </div>
  );
};

export default BookList;
