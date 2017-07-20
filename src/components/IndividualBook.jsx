import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IndividualBook extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    changeBook: PropTypes.func.isRequired
  };

  updateShelf(shelf) {
    this.props.changeBook(this.props.book, shelf);
  }

  // moveTo = (event, book) => {
  //   this.setState({
  //     change: event.target.value
  //   });
  //   BooksAPI.update(book, event.target.value);
  // };

  render() {
    let book = this.props.book;
    // console.log(moveTo);

    return (
      <div>
        {/* JSON.stringify(this.state) */}
        <li className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={event => this.updateShelf(event.target.value)}>
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <div className="book-authors">
            {book.authors}
          </div>
        </li>
      </div>
    );
  }
}

export default IndividualBook;
