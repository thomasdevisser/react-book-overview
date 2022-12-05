import React, { Component } from "react";
import Booklist from "./Booklist";
import classicBooks from "../data";
import { getBooksOnPage } from "../helpers";
import Pagination from "./Pagination";

class BookOverview extends Component {
  state = {
    books: classicBooks,
    currentPage: 1,
    pageSize: 8,
  };

  makeActive = (e) => {
    const clicked = e.target.parentNode.id;
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: parseInt(clicked),
      };
    });
  };

  render() {
    const { books: allBooks, pageSize, currentPage } = this.state;
    const books = getBooksOnPage(allBooks, pageSize, currentPage);

    return (
      <main className="container py-4">
        <h1>All movies</h1>
        <Booklist books={books} />
        <Pagination
          count={allBooks.length}
          pageSize={pageSize}
          currentPage={currentPage}
          makeActive={this.makeActive}
        />
      </main>
    );
  }
}

export default BookOverview;
