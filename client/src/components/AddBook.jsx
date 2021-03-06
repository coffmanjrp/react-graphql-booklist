import { gql, useQuery } from '@apollo/client';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { data, error, loading } = useQuery(getAuthorsQuery);

  if (error) {
    console.log(error);
  }

  return (
    <>
      <form className="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
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
