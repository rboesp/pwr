import React, { Component } from 'react'


export default class Graph extends Component {
    render() {
        return (
            <div>
                <figure>
                    <img className='' src={this.props.graphUrl} ></img>
                </figure>
            </div>
        )
    }
}
