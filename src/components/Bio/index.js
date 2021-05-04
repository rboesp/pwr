import React from 'react'
import Resume from '../Resume'

export default function Bio(props) {
    return (
        <div className="row">
            <h5 className="text col-12">
                <span className='size'>Welcome</span> to my personal site. I am a 
                CS grad from Oregon State University now living 
                in Seattle, WA.
            </h5>
            <h5 className="text col">
                <span className='size'>Currently</span> teaching Full Stack Development at 
                University of Washington's Full Stack Coding 
                Bootcamp.
            </h5>
            <h5>
                <span className='size col'>
                    Open
                </span>to software development positions in
                the Seattle area.
            </h5>
        </div>
    )
}
