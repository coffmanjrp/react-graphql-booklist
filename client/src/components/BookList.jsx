import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetail from './BookDetail';

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { data, error, loading } = useQuery(getBooksQuery);

  const selectBook = (e) => setSelected(e);

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
          <li key={book.id} onClick={(e) => selectBook(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetail bookId={selected} />
    </div>
  );
};

export default BookList;
