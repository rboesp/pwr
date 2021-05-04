import React, { Component } from 'react'
import Resume from '../Resume'

export default class Bio extends Component {
    pic = () => {  
        return (
        <>
            <xml version="1.0" encoding="UTF-8" standalone="no"></xml>
            <svg width="256px" height="272px" viewBox="0 0 256 272" version="1.1" >
                <g>
                    <path d="M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z" fill="#E23237"></path>
                    <path d="M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z" fill="#B52E31"></path>
                    <path d="M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z" fill="#FFFFFF"></path>
                </g>
            </svg>
        </>
    )}
    render() {
        return (
            <div className="row">
                <h5 className="text col-12">
                    <span className='size'>Welcome</span> to my personal site. I am a 
                    CS grad from Oregon State University now living 
                    in Seattle, WA.
                </h5>
                <h5 className="text col">
                    <span className='size'>Currently</span> teaching Full Stack Development at 
                    University of Washington's Full Stack Coding 
                    Bootcamp.
                </h5>
                <h5>
                    <span className='size col'>
                        Open
                    </span>to software development positions in
                    the Seattle area.
                </h5>
            </div>
        )
    }
}
