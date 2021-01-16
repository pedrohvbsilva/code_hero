import React from 'react'

const ListItem = ({ character }) => {
    const {name, series, events, thumbnail} = character
    return (      
    <div className='character'>
        <img src={thumbnail.path + '.' + thumbnail.extension} alt={name} />
        <div className='character-name'>
            {name}
        </div>
        <ul className='character-series'>
            {series.items.length === 0 ? 'Sem series' : series.items.slice(0,3).map(serie => <li key={serie.key}>{serie.name.split('(')[0]}</li>)}
        </ul>
        <ul className='character-events'>
            {events.items.length === 0 ? 'Sem eventos' : events.items.slice(0,3).map(event => <li key={event.key}>{event.name}</li>)}
        </ul>         
    </div>      
    )
}

export default ListItem;