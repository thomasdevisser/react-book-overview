import _ from "lodash";

export function getBooksOnPage(books, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  books = _(books).slice(startIndex).take(pageSize).value();
  return books;
}

export function filterBooks(books, searchValue) {
  if ("" === searchValue) {
    return books;
  }

  return books.filter((book) => book.title.toLowerCase().startsWith(searchValue.toLowerCase()));
}
