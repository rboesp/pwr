import React from 'react'
import Pill from '../Pill'


export default function ProjectRow({rowName, pills})  {
    return (
        <div className='row m-1'>
            <div className='col-2 m-auto'>    
                <p className='m-auto '>
                    {rowName}
                </p>
            </div>
            <div className='col d-flex '>
            {
                pills.map(
                    pill => <>
                        <div className='pillContainer m-1'>
                            <Pill pillData={pill}/>
                        </div>
                    </>
                )
            }
            </div>
        </div>
    )
}

