import React from 'react';
import IndividualBook from './IndividualBook';

function Bookshelf(props) {
  let dataBook = props.dataBook;
  // let shelf = props.shelf;
  let title = props.title;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {dataBook.map(book => <IndividualBook book={book} key={book.id} />)}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
