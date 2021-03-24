import React, { Component } from 'react'


export default class Graph extends Component {
    render() {
        return (
            <div>
                <figure>
                    <img className='graph' src={this.props.graphUrl} ></img>
                </figure>
            </div>
        )
    }
}
