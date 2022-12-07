import { useState } from "react";
import Booklist from "./Booklist";
import classicBooks from "../data";
import { getBooksOnPage } from "../helpers";
import Pagination from "./Pagination";

function BookOverview() {
  const [books] = useState(classicBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const booksOnPage = getBooksOnPage(books, pageSize, currentPage);

  return (
    <main className="container py-4">
      <h1>All movies</h1>
      <Booklist books={booksOnPage} />
      <Pagination
        count={books.length}
        pageSize={pageSize}
        currentPage={currentPage}
        makeActive={(e) => setCurrentPage(e.target.parentNode.id)}
      />
    </main>
  );
}

export default BookOverview;
