import React, { Component } from 'react'
import './style.css'

export default class SideOption extends Component {
    render() {
        return (
            //this needs to be an href / link!!
            <div className='p-2 sideBtns d-flex justify-content-center'>
                <div className=''>
                    {/* prob here */}
                    <h5 className='p-1 option-names'>
                        {this.props.name}
                    </h5>
                </div>
            </div>
        )
    }
}
