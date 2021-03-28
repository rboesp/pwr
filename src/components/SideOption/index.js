import React, { Component } from 'react'
import './style.css'

export default class SideOption extends Component {
    handle = (e) => {
        const targetName = e.target.textContent
        this.props.switchPage(targetName)
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
                    <h5 className='p-1 option-names'>
                        {this.props.name}
                    </h5>
                </div>
            </div>
        )
    }
}
