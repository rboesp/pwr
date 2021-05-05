import React from 'react'
import Pill from '../Pill'
import {Col} from 'react-bootstrap'

export default function Project(props)  {
    const {
        details,
        } = props;
    const {
        name,
        img,
        desc,
        urlBlurb,
        // url,
        // utilized,
        pills
    } = details;
    return (
        <Col xs={12} >
            <div className="card-body border border-warning text-center m-3">
                <figure className=''>
                <img alt={name} className='card-img-top'
                    style={
                        {
                            height: '250px',
                            width: '250px'
                        }
                    }
                ></img>
                </figure>
                <h5 className="card-title">
                    {name}
                </h5>
                <div className='d-flex justify-content-center'>
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
                <p className="card-text ">
                    {desc}
                </p>
                <a href={img} target="_blank" className="badge" rel="noreferrer">
                    {urlBlurb}
                </a>
            </div>
        </Col>
    )
}
