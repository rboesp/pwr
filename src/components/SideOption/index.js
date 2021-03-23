import React, { Component } from 'react'

export default class SideOption extends Component {
    render() {
        return (
            <div className='d-flex justify-content-space-around'>
                <div className="">
                    <figure className=''>
                        <img className='icons' src={this.props.iconUrl} alt="sidenav option icon"></img>
                    </figure>
                </div>
                <div className='d-flex align-items-center'>
                    <p className=''>
                        {this.props.name}
                    </p>
                </div>
            </div>
        )
    }
}
