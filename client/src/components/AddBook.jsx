import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const { data, error, loading } = useQuery(getAuthorsQuery);

  const updateBookName = (e) => setName(e.target.value);

  const updateGenre = (e) => setGenre(e.target.value);

  const updateAuthorId = (e) => setAuthorId(e.target.value);

  const submitForm = (e) => {
    e.preventDefault();

    console.log({ name, genre, authorId });
  };

  if (error) {
    console.log(error);
  }

  return (
    <>
      <form className="add-book" onSubmit={submitForm}>
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
      </form>
    </>
  );
};

export default AddBook;
