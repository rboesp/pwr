import React from 'react'
import './style.css'
import { Link  } from 'react-router-dom';
import Resume from '../Resume';

export default function SideOption(
    {
        name,
        url
    }
    ) {
    return (
        <div className='p-2 sideBtns d-flex justify-content-center'>
            <div className=''>
                <h5 className='p-1 option-names'>
                {
                    name === 'Resume' ? 
                    <Resume />:
                    <Link to={url}>{name}</Link>
                }
                </h5>
            </div>
        </div>
    )
}
