import React, { Component } from 'react'
import Pill from '../Pill'
import {Col} from 'react-bootstrap'

export default class Project extends Component {

    state = {

    }

    render() {
        const {
            details,
          } = this.props;
        const {
            name,
            img,
            desc,
            urlBlurb,
            url,
            utilized,
            pills
        } = details;
        return (
            <Col xs={6} >
                <div class="card-body border border-warning">
                            <img className='card-img-top'
                                style={
                                    {
                                        height: '250px',
                                        width: '250px'
                                    }
                                }
                            ></img>
                            <h5 class="card-title">
                                {name}
                            </h5>
                            <div className='d-flex'>
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
                            <p class="card-text">
                                {desc}
                            </p>
                            <a href={img} target="_blank" class="badge">
                                {urlBlurb}
                            </a>
                        </div>
            </Col>
        )
    }
}
