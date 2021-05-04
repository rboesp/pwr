import React from 'react'

function SideIcon({href, src}) {
    return (
        <figure className='sideBtns'>
            <a 
                target="_blank" 
                href={href}>
                <img src={src} />
            </a>
        </figure>
    )
}

export default SideIcon