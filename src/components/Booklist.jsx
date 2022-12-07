import Book from "./Book";

function Booklist({ books }) {
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

export default Booklist;
