import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './components/BookShelf.js';
import Search from './components/Search';
import PageNotFound from './components/PageNotFound.js';

export default function App() {
  const [books, setBooks] = useState([]);

  const onChangeShelf = async (book, newShelf) => {
    const res = await BooksAPI.update(book, newShelf);
    if (!res) return;
    
    let exist = false;
    const updatedBooks = books.map((updatedBook) => {
      if (updatedBook.id === book.id) {
        updatedBook.shelf = newShelf;
        exist = true;
      }
      return updatedBook;
    });
    if (!exist) {
      book.shelf = newShelf;
      updatedBooks.push(book);
    }
    setBooks(updatedBooks);
  };

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  return (
    <div className='app'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>
              <div className='list-books-content'>
                <div>
                  <BookShelf
                    title='Currently Reading'
                    books={books.filter(
                      (book) => book.shelf === 'currentlyReading'
                    )}
                    allBooks={books}
                    shelfValue='currentlyReading'
                    onChangeShelf={onChangeShelf}
                  ></BookShelf>
                  <BookShelf
                    title='Want to Read'
                    books={books.filter((book) => book.shelf === 'wantToRead')}
                    allBooks={books}
                    shelfValue='wantToRead'
                    onChangeShelf={onChangeShelf}
                  ></BookShelf>
                  <BookShelf
                    title='Read'
                    books={books.filter((book) => book.shelf === 'read')}
                    allBooks={books}
                    shelfValue='read'
                    onChangeShelf={onChangeShelf}
                  ></BookShelf>
                </div>
              </div>
              <div className='open-search'>
                <Link to='/search'>Search</Link>
              </div>
            </div>
          }
        />

        <Route path='/search' element={<Search books={books} onChangeShelf={onChangeShelf}/>} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
