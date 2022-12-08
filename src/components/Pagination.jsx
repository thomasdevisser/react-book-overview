import _ from "lodash";

function Pagination({ pageSize, currentPage, count, makeActive }) {
  const pages = _.range(1, count / pageSize + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page, index) => {
          let classes = "page-item";
          if (index + 1 === parseInt(currentPage)) {
            classes += " active";
          }
          return (
            <li key={index} id={index + 1} className={classes}>
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
