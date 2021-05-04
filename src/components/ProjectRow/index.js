import React, { Component } from 'react'
import Pill from '../Pill'


export default class ProjectRow extends Component {
    state={}

    render() {
        return (
            <div className='row m-1'>
                <div className='col-2 m-auto'>    
                    <p className='m-auto '>
                        {this.props.rowName}
                    </p>
                </div>
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
