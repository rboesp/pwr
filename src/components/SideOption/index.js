import React, { Component } from 'react'
import './style.css'

export default class SideOption extends Component {
    handle = () => {
        console.log('handled')
    }
    render() {
        return (
            <div className='p-2 sideBtns d-flex justify-content-center' onClick={this.handle}>
                <div className="figure-container">
                    <figure className=''>
                        <img className='icons' src={this.props.iconUrl} alt="sidenav option icon"></img>
                    </figure>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='p-1 option-names'>
                        {this.props.name}
                    </p>
                </div>
            </div>
        )
    }
}
