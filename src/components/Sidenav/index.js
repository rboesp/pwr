import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export default class Sidenav extends Component {
    state = {}

    render() {
        return (
            <>
                <div className='border border-success sidenav-height'>
                    <Navbar expand="lg" className="">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div id='navbarSupportedContent' className='border border-warning'>
                            Hey!!
                        </div> 
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </>
        )
    }
}
