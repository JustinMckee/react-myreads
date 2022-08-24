import Book from './Book';

const SearchResults = ({books, results, updateShelf}) => {

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {results.map((result) => (
          <li key={result.id}>
            <Book book={result} currentShelf={books.filter(book => book.id === result.id).map( book => book.shelf)} updateShelf={updateShelf} />
          </li>
        ))}
      </ol>
    </div>
  )
}
export default SearchResults;
