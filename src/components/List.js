import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import Header from './Header';

const List = ({books, updateShelf}) => {

  const filterShelf = (name) => {
    let filter = books.filter( (book) => (book.shelf === name) );
    return filter;
  }

  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        {
          <BookShelf shelf={filterShelf('currentlyReading')} name="Currently Reading" updateShelf={updateShelf}/>
        }

        {
          <BookShelf shelf={filterShelf('wantToRead')} name="Want to Read" updateShelf={updateShelf}/>
        }

        {
          <BookShelf shelf={filterShelf('read')} name="Read" updateShelf={updateShelf}/>
        }

      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );

}

export default List;
