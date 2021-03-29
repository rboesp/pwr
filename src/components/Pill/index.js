import React, { Component } from 'react'
import SVG from '../SVG'

export default class Pill extends Component {
    getG = () => {
        console.log(this.props)
        return (
            <>
                <g>
                    {
                        this.props.d_s.map((d,i) => {
                            return (
                                <path 
                                    d={d}
                                    fill={this.props.fills[i]}>  
                                </path>
                            )
                        })
                    }
                </g>
            </>
        )
    }
    render() {
        return (
            // <div className='badge rounded-pill badge-pill'>
                <span className='badge rounded-pill font-exempt' style={
                    {
                        backgroundColor: this.props.backgroundColor,
                        color : this.props.color
                    }
                }
                >{this.props.name}
                <SVG 
                    height={24}
                    width={24}
                    viewBox="0 0 256 272" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    preserveAspectRatio="xMidYMid"
                    gText={this.getG}
                />
                </span>
            // </div>
        )
    }
}
