import React, { Component } from 'react'
import  SideOption from "../SideOption/";
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'

export default class Sidenav extends Component {
    state = {
        icon_size : 35,
        nav_options : [
            {
            name: `Home`,
            value: `https://img.icons8.com/dusk/${100}/000000/home.png`
            },
            {
            name: `Projects`,
            value: `https://img.icons8.com/dusk/${100}/000000/group-of-projects.png`
            },
            {
            name: `Contact`,
            value: `https://img.icons8.com/plasticine/${this.icon_size}/000000/contact-card.png`
            },
            {
            name: `Resume`,
            value: `https://img.icons8.com/clouds/${this.icon_size}/000000/resume.png`
            }
        ]
    }

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
                                    {
                                    this.state.nav_options.map(
                                        option => {
                                            console.log(option);
                                            return <SideOption name={option.name} iconUrl={option.value}></SideOption>
                                        })
                                    }
                                    
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
