import React from 'react'

const ListItem = ({ character }) => {
    const {name, series, events, thumbnail, description} = character
    console.log(character)
    return (      
        <div className='character'>
            <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} />
            <div className='character-name'>
                {name}
            </div>
            <ul className='character-series'>
                {series.items.length === 0 ? 'Sem series' : series.items.slice(0,3).map((serie, key) => <li key={key}>{serie.name.split('(')[0]}</li>)}
            </ul>
            <ul className='character-events'>
                {events.items.length === 0 ? 'Sem eventos' : events.items.slice(0,3).map((event, key) => <li key={key}>{event.name}</li>)}
            </ul>         
            <div className='char-overview'> 
                <h4>Descrição:</h4>
                <div>{!(description) ? 'Sem descrição': description}</div>
            </div>
        </div>      
    )
}

export default ListItem;