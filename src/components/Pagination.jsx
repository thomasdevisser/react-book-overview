import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  getPageArray = () => {
    const { count } = this.props;
    const pages = count / this.props.pageSize;
    return _.range(1, pages + 1);
  };

  listClasses = (index) => {
    let className = "page-item";
    if (this.props.currentPage === index + 1) className += " active";
    return className;
  };

  render() {
    const pages = this.getPageArray();

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page, index) => (
            <li key={index} id={index + 1} className={this.listClasses(index)}>
              <button onClick={this.props.makeActive} className="page-link">
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
