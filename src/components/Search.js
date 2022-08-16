import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import { useState} from 'react';
const Search=({books,onChangeShelf}) =>{

  const [query, setQuery] = useState("");
  const [wrongSearch, setWrongSearch] = useState(false);
  const [searchedBooks, setSearchedBooks] = useState([]);
//console.log("books in search:",books)
  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query==="") {
      setWrongSearch(false);
      setSearchedBooks([]);
    } 
    else {
      BooksAPI.search(query.trim()).then(books => {
        if(books&&books.length > 0 )
        { setWrongSearch(false);
          setSearchedBooks(books);
        }
          else{
            setWrongSearch(true);
            setSearchedBooks([]); }  
        }
      )
      } 
      }
    
 const getShelf= (books,book)=>{ 
    let shelfValue='none';
    let i=0;
  while(i<books.length)
  {
    if (books[i].id===book.id)
    {shelfValue=books[i].shelf
      i=i+1;
      console.log("shelfValue: ",shelfValue)
    return shelfValue;
    }
    i=i+1;
  }
  console.log("shelfValue: ",shelfValue)
  return shelfValue;
}
  
     
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">
                Close
              </Link>
              <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={query} onChange={handleSearch}/>
          </div>
             
            </div>
            <div className="search-books-results">
              {
                <ol className="books-grid">
                 
                {searchedBooks.map(book => ( <Book book={book} key={book.id} books={books}  shelf={getShelf(books,book)}  onChangeShelf={onChangeShelf}> </Book>))}
               
                {wrongSearch && (<p>please, search with these terms only:
                   'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
                </p>)}
                
              </ol>
              }   
            </div>
          </div>
              )
              }
              export default Search;