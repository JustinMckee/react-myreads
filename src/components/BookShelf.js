// import {useState} from 'react';
import Book from './Book';

const BookShelf = ({shelf, name, updateShelf}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {
          shelf.map( book => (
            <li key={book.id}>
              <Book book={book} currentShelf={shelf} updateShelf={updateShelf} />
            </li>
          ))
        }
        </ol>
      </div>
    </div>
  )
}
export default BookShelf;
