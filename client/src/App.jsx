import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

// Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Book List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
