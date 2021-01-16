import React from 'react'
import ListItem from './ListItem'

const List = ({ characters }) => {

    return (      
    <div className='char-container'>
        {characters.map( char => <ListItem key={char.id} character={char}/> )} 
    </div>      
    )
}

export default List;