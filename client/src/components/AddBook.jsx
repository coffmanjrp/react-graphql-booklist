import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
} from '../queries/queries';

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const { data, error, loading } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const updateBookName = (e) => setName(e.target.value);

  const updateGenre = (e) => setGenre(e.target.value);

  const updateAuthorId = (e) => setAuthorId(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();

    addBook({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  };

  if (error) {
    console.log(error);
  }

  return (
    <>
      <form className="add-book" onSubmit={submitForm}>
        <div>
          <div className="field">
            <label>Book name:</label>
            <input type="text" onChange={updateBookName} />
          </div>
          <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={updateGenre} />
          </div>
          <div className="field">
            <label>Author:</label>
            <select onChange={updateAuthorId}>
              <option>Select author</option>
              {loading ? (
                <option disabled>Loading Authors...</option>
              ) : (
                data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))
              )}
            </select>
          </div>
          <button>+</button>
        </div>
      </form>
    </>
  );
};

export default AddBook;
