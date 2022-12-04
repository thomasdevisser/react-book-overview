import React, { Component } from "react";

class Book extends Component {
  render() {
    const { book, index } = this.props;

    return (
      <tr>
        <th>{index}</th>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.published}</td>
      </tr>
    );
  }
}

export default Book;
