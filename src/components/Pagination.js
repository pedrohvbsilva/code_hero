import React from 'react'

// const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
const Pagination = ({ currentPage, paginate }) => {

  const pageNumbers = [];
  // Deve ter uma maneira melhor de fazer isso
  if (currentPage === 1) {
    for (let i = currentPage; i <= 5; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push('>')
    pageNumbers.push('>>')
  } else if(currentPage === 2) {
      pageNumbers.push('<')
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('>')
      pageNumbers.push('>>')
    } else if(currentPage === 3) {
        pageNumbers.push('<<')
        pageNumbers.push('<')
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('>')
        pageNumbers.push('>>')
  } else if( currentPage === 4 ) {
    pageNumbers.push('<<')
    pageNumbers.push('<')
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push('>')
  } else if(currentPage === 5 ) {
    pageNumbers.push('<<')
    pageNumbers.push('<')
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  } 

  return (
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={
              () => { 
                  if(number === '<<') {
                    paginate(1)
                  } else if (number === '<') {
                    paginate(currentPage - 1)
                  } else if (number === '>>') {
                    paginate(5)
                  } else if (number === '>') {
                    paginate(currentPage + 1)
                  } else {
                    paginate(number)
                  }
                }
              } href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;