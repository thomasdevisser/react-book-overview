import { useState } from "react";
import Booklist from "./Booklist";
import classicBooks from "../data";
import { getBooksOnPage, filterBooks } from "../helpers";
import Pagination from "./Pagination";
import Search from "./Search";

function BookOverview() {
  const [books] = useState(classicBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const [searchValue, setSearchValue] = useState("");

  const filteredBooks = filterBooks(books, searchValue);
  const booksOnPage = getBooksOnPage(filteredBooks, pageSize, currentPage);

  return (
    <main className="container py-4">
      <h1>All movies</h1>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      <Booklist books={booksOnPage} />
      <Pagination
        count={filteredBooks.length}
        pageSize={pageSize}
        currentPage={currentPage}
        makeActive={(e) => setCurrentPage(e.target.parentNode.id)}
      />
    </main>
  );
}

export default BookOverview;
