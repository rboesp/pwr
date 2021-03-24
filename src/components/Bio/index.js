import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div class="">
                <div className='ml-4'>
                    {/* <h1>Hi I'm Robert! I'm a Software Engineer</h1> */}
                    {/* <h1>I'm a Software Engineer</h1> */}
                    <div class="row">
                        <div class="text-wrapper col-md-6">
                            <h5 class="text">
                                <span className='size'>Welcome</span> to my personal site. I am a recent 
                                CS grad from Oregon State University based 
                                out of Seattle, WA.
                            </h5>
                        </div>
                        <div class="text-wrapper col-md-6">
                            <h5 class="text">
                                <span className='size'>Currently</span> teaching Full Stack Development at 
                                University of Washington's Full Stack Coding 
                                Bootcamp.
                            </h5>
                        </div>
                        <div class="text-wrapper col-lg-6">
                            <h5 class="text">
                            <span className='size'>Open</span> to software development positions in
                                the Seattle area.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
