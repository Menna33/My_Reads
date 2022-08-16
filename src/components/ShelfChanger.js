const ShelfChanger = ({ book,shelf, onChangeShelf }) => {
  const onChange = (e) => {
    const newShelf = e.target.value;
    onChangeShelf(book, newShelf);
  };

  return (
    <div className='book-shelf-changer'>
      <select onChange={onChange} defaultValue={shelf}>
        <option value='move' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
