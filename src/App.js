import React, { useEffect, useState } from 'react'
import List from './components/List'
import Pagination from './components/Pagination'

import MARVEL_API from './marvelApi'
import logoObjective from './images/Objective.png'

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);
  const charactersPerPage = 10;

  useEffect(() => {
    getMovies(MARVEL_API)
  })
  
  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.data.results)      
      })
      .catch(e => console.error(e))
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(`${MARVEL_API}&nameStartsWith=${searchTerm}`)      
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
   // Get current character
   const indexOfLastCharacter = currentPage * charactersPerPage;
   const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
   const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter);
 
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <header>
        <img src={logoObjective} alt=''></img>
        <div><span>Pedro Henrique Valderrama Bento da Silva</span> Teste de Front-end</div>
      </header>
  
      <form className='search-form' onSubmit={handleOnSubmit}>         
        <h1>Busca de personagens</h1>
        <h3>Nome do personagem</h3>
        <input 
          className='search' 
          type='search' 
          placeholder='Search' 
          value={searchTerm}
          onChange={handleOnChange}>
        </input>
      </form>

      <ul className='header-tabela'>
        <li id='per'>
          Personagens
        </li>
        <li id='ser'>
          Series
        </li>
        <li id='eve'>
          Eventos
        </li>
      </ul>

      <List characters={currentCharacters} /> 

      <footer>
        <Pagination 
          charactersPerPage={charactersPerPage}
          currentPage={currentPage} 
          totalCharacters={characters.length}
          paginate={paginate}/>
      </footer>
    </>
  );
}

export default App;
