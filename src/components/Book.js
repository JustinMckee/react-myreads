import ShelfChanger from './ShelfChanger';

const Book = ({book, currentShelf, updateShelf}) => {

  const style = {
    width: 128,
    height: 193,
    backgroundImage: book?.imageLinks?.thumbnail && `url("${book.imageLinks.thumbnail}")`,
  }

  return (

      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={style}
          ></div>
          <ShelfChanger book={book} currentShelf={currentShelf} updateShelf={updateShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        {book.hasOwnProperty('authors') && (
          <ul className="book-authors">
            {book.authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
        )}

      </div>
  )
}

export default Book;
