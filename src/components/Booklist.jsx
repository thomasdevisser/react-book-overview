import React, { Component } from "react";
import Book from "./Book";

class Booklist extends Component {
  render() {
    const { books } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <Book key={book.id} book={book} index={book.id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Booklist;
