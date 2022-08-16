import ShelfChanger from './ShelfChanger.js';
const Book = ({ book,  books, shelf, onChangeShelf }) => {
  const img =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : '';
  let shelfValue = 'none';

  for (let i in books) {
    if (books[i].id === book.id) {
      shelfValue = shelf;
      break;
    }
  }

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{ width: 128, height: 193, backgroundImage: `url(${img})` }}
        ></div>
        <ShelfChanger
          book={book}
          shelf={shelfValue}
          onChangeShelf={onChangeShelf}
        />
      </div>
      <div className='book-title'>{book.title}</div>

      {book.authors &&
        book.authors.map((author, i) => (
          <div className='book-authors' key={i}>
            {author}
          </div>
        ))}
    </div>
  );
};

export default Book;
