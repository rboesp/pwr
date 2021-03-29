import React, { Component } from 'react'

export default class SVG extends Component {
    render() {
        return (
            <svg 
                width={this.props.width} 
                height={this.props.height}
                viewBox={this.props.viewBox}
                version={this.props.version}
                xmlns={this.props.xmlns} 
                xmlnsXlink={this.props.xmlnsXlink}
                preserveAspectRatio={this.props.preserveAspectRatio}>
                {this.props.gText()}
            </svg>
        )
    }
}
