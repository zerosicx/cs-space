import React from 'react';

interface PaginationProps {
  pageNumber: number;
  totalPages: number;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageNumber, totalPages, setPageNumber }) => {
  const handlePrevClick = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNextClick = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center my-4">
        <li className={`page-item ${pageNumber === 1 && 'disabled'}`}>
          <button className="page-link" onClick={handlePrevClick}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <span className="page-link">
            Page {pageNumber} of {totalPages}
          </span>
        </li>
        <li className={`page-item ${pageNumber === totalPages && 'disabled'}`}>
          <button className="page-link" onClick={handleNextClick}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
