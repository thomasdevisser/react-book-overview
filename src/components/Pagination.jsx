import _ from "lodash";

function Pagination({ pageSize, currentPage, count, makeActive }) {
  const pages = _.range(1, count / pageSize + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page, index) => {
          return (
            <li key={index} id={index + 1} className="page-item">
              <button onClick={makeActive} className="page-link">
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
