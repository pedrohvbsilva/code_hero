import React from 'react'

// const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
const Pagination = ({ charactersPerPage, currentPage, totalCharacters, paginate }) => {
  const pageNumbers = [];
  const pages = Math.ceil(totalCharacters / charactersPerPage)

  // Deve ter uma maneira melhor de fazer isso
  if (currentPage === 1) {
    for (let i = currentPage; i <= pages; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push('>')
    pageNumbers.push('>>')
  } else if(currentPage === 2) {
      pageNumbers.push('<')
      for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('>')
      pageNumbers.push('>>')
    } else if(currentPage >= 3 && currentPage < pages - 1) {
        pageNumbers.push('<<')
        pageNumbers.push('<')
        for (let i = 1; i <= pages; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('>')
        pageNumbers.push('>>')
    } else if( currentPage === pages - 1 ) {
    pageNumbers.push('<<')
    pageNumbers.push('<')
      for (let i = 1; i <= pages; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push('>')
    } else if(currentPage === pages ) {
      pageNumbers.push('<<')
      pageNumbers.push('<')
      for (let i = 1; i <= pages; i++) {
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
                    paginate(pages)
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