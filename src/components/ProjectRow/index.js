import React, { Component } from 'react'
import Pill from '../Pill'


export default class ProjectRow extends Component {
    state={}

    render() {
        return (
            <div className='border'>
                <p className='border col-1'>{this.props.rowName}</p>
                <div className='col row'>
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
