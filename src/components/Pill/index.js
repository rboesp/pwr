import React, { Component } from 'react'
import SVG from '../SVG'

export default class Pill extends Component {
    getG = () => {
        console.log(this.props.pillData)
        return (
            <>
                <g>
                    {
                        this.props.pillData.d_s.map((d,i) => {
                            return (
                                <path 
                                    d={d}
                                    fill={this.props.pillData.fills[i]}>  
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
                <span 
                    className='badge rounded-pill font-exempt banger' 
                    style={
                        {
                            backgroundColor: this.props.pillData.bgColor,
                            color : this.props.pillData.color
                        }
                    }
                >
                <span 
                    className='font-exempt' 
                    style={
                        {
                            padding: "5px"
                        }
                    }
                >
                    {this.props.pillData.name}
                </span>
                <SVG 
                    height={24}
                    width={24}
                    viewBox={this.props.pillData.viewBox} 
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
