import _ from "lodash";

export function getBooksOnPage(allBooks, pageSize, currentPage) {
  const startIndex = (currentPage - 1) * pageSize;
  const books = _(allBooks).slice(startIndex).take(pageSize).value();
  return books;
}
