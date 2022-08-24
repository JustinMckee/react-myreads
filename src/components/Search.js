import { Link } from 'react-router-dom';
import {useState} from 'react';
import SearchResults from './SearchResults';
import * as BooksAPI from "../utils/BooksAPI";

const Search = ({books, updateShelf}) => {

  const [results, updateResults] = useState([]);

  const [query, setQuery] = useState('');

  const updateQuery = (value) => {
    setQuery(value);
    searching(value);
  }

  const searching = (value) => {

    const search = async () => {
      const response = await BooksAPI.search(value, 20);
      if(Array.isArray(response)) {
        updateResults(response);
      } else {
        updateResults([]);
      }
    }
    search(value);
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      {
        results.length && (
          <SearchResults books={books} results={results} updateShelf={updateShelf} />
        )
      }
    </div>
  );

}

export default Search;
