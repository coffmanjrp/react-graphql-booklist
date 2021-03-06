import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetail = ({ bookId }) => {
  const { data, error, loading } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  if (loading) {
    return <h4>Loading...</h4>;
  }

  if (error) {
    console.log(error);
  }

  const { book } = data;

  return (
    <>
      <div className="book-details">
        {book ? (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>
              {book.author.name} ({book.author.age})
            </p>
            <h4>All books by this author:</h4>
            <ul className="other-book">
              {book.author.books.map((book) => (
                <li key={book.id}>{book.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h4>No book selected...</h4>
        )}
      </div>
    </>
  );
};

export default BookDetail;
