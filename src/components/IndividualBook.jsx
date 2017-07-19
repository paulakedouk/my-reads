import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

class IndividualBook extends Component {
  state = {
    change: ''
  };

  moveTo(event, book) {
    this.setState({
      change: event.target.value
    });
    BooksAPI.update(book, event.target.value);
  }

  render() {
    let book = this.props.book;
    // console.log(book);
    return (
      <div>
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
              <select value={this.state.change} onChange={event => this.moveTo(event, book)}>
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
