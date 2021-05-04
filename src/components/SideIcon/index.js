import React, { Component } from 'react'

export default class SideIcon extends Component {
    render() {
        return (
            <figure className='sideBtns'>
                <a target="_blank" href={this.props.href}>
                    <img src={this.props.src} />
                </a>
            </figure>
        )
    }
}
