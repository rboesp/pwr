import React, { Component } from 'react'
import  SideOption from "../SideOption/";
import { Navbar, Nav } from 'react-bootstrap';
import './style.css'
import SideIcon from '../SideIcon';

export default class Sidenav extends Component {
    state = {
        icon_size : 35,
        nav_options : [
            {
            name: `Bio`,
            value: `https://img.icons8.com/dusk/${100}/000000/home.png`
            },
            {
            name: `Projects`,
            value: `https://img.icons8.com/dusk/${100}/000000/group-of-projects.png`
            },
            {
            name: `Resume`,
            value: `https://img.icons8.com/clouds/${this.icon_size}/000000/resume.png`
            }
        ],
        icons: [
            {
                href: 'https://linkedin.com/in/robertboespflug',
                src: 'https://img.icons8.com/color/100/000000/linkedin.png'
            },
            {
                href: 'https://github.com/rboesp',
                src: 'https://img.icons8.com/nolan/100/github.png' 
            }
        ]
    }

    render() {
        return (
            <>
                <div className='bg-dark  sidenav-border sidenav-height'>
                    <div className='d-flex flex-column  full-height'>
                        <Navbar expand="lg" className="p-0 m-0 d-flex flex-column justify-content-between full-height ">
                             <div className=' p-2'>
                                <h1 className='p-0 text-center white'>Robert Boespflug</h1>
                                <h6 className='p-0 text-center white'>Software Developer </h6>
                                <h6 className='p-0 text-center white'>Seattle, WA</h6>
                            </div>
                            <div id="basic-navbar-nav" className='flex-grow-0 d-flex flex-column justify-content-around full-height full-width pt-5'>
                                <div className=' full-height-width '>
                                    <div className='full-height-width d-flex justify-content-center'>
                                        <div className='d-flex flex-column align-items-center full-width mb-5'>
                                            <div className='full-width'>
                                                {
                                                this.state.nav_options.map(
                                                    option => {
                                                        return <SideOption switchPage={this.props.switchPage} name={option.name} iconUrl={option.value}></SideOption>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='m-0 p-0 full-height d-flex justify-content-center align-items-center'>
                                    {
                                        this.state.icons.map( icon => <SideIcon href={icon.href} src={icon.src} />)
                                    }
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </>
        )
    }
}
