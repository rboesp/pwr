import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

export default class Sidenav extends Component {
    state = {}

    render() {
        return (
            <>
                <div className='sidenav-height d-flex flex-column justify-content-center'>
                    <Navbar expand="lg" className="">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div id='navbarSupportedContent' className='full-height-width'>
                            <div className='border full-height-width d-flex justify-content-center'>
                                <div className='d-flex justify-content-center align-items-start flex-column'>
                                    <div>Hwy!</div>
                                    <div>Hi</div>
                                </div>
                            </div>
                        </div> 
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </>
        )
    }
}
