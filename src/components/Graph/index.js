import React from 'react'


function Graph({graphUrl}) {
    return (
        <div>
            <figure>
                <img className='graph' src={graphUrl} ></img>
            </figure>
        </div>
    )
}

export default Graph
