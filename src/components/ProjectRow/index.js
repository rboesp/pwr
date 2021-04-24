import React, { Component } from 'react'
import Pill from '../Pill'


export default class ProjectRow extends Component {
    state={}

    render() {
        return (
            <div className='row m-1'>
                <p className='m-auto col-1'>
                    {this.props.rowName}
                </p>
                <div className='col d-flex '>
                {
                    this.props.pills.map(
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
}
