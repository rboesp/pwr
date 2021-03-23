import React, { Component } from 'react'
import './style.css'

export default class SideOption extends Component {
    render() {
        return (
            <div className='p-2 d-flex justify-content-center'>
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
