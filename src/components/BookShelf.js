import Book from './Book';
const BookShelf = ({
  title,
  books,
  shelfValue,
  onChangeShelf,
}) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                books={books}
                shelf={shelfValue}
                onChangeShelf={onChangeShelf}
              >
                {' '}
              </Book>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
