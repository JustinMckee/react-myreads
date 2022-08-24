import {useState} from 'react';

const ShelfChanger = ({book, currentShelf, updateShelf}) => {

  const [currentBook, updateCurrentBook] = useState(book);

  const handleSelect = (event) => {
    updateCurrentBook(currentBook.shelf = event.target.value);
    updateShelf(currentBook, event.target.value);
  }

  const shelf = currentBook.hasOwnProperty('shelf') ? currentBook.shelf : (currentShelf.length ? currentShelf[0] : 'none');

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleSelect}>
        <option disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )

}

export default ShelfChanger;
