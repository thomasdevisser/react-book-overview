function Book({ book, index }) {
  return (
    <tr>
      <th>{index}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.published}</td>
    </tr>
  );
}

export default Book;
