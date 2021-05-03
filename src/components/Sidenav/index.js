import React, { Component } from 'react'
import  SideOption from "../SideOption/";
import { Navbar } from 'react-bootstrap';
import './style.css'
import SideIcon from '../SideIcon';

export default class Sidenav extends Component {
    state = {
        icon_size : 35,
        nav_options : [
            {
            name: `Bio`            },
            {
            name: `Projects`            },
            {
            name: `Resume`            }
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
            {/* sidenav-border */}
                <div className='bg-dark border border-danger sidenav-height '>
                    <div className='border border-primary full-height d-flex flex-column justify-content-between'>
                        {/* <Navbar expand="lg" className=" p-0 m-0 full-height "> */}
                             <div className=' full-width p-2'>
                                <h1 className='p-0 text-center white'>Robert Boespflug</h1>
                                <h6 className='p-0 text-center white'>Software Developer </h6>
                                <h6 className='p-0 text-center white'>Seattle, WA</h6>
                            </div>
                            <div id="basic-navbar-nav" className=' '>
                                <div className=''>
                                    <div className=''>
                                        <div className=' '>
                                            <div className=' '>
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
                            </div>
                            <div className=' d-flex justify-content-around '>
                                {
                                    this.state.icons.map( icon => <SideIcon href={icon.href} src={icon.src} />)
                                }
                            </div>
                        {/* </Navbar> */}
                    </div>
                </div>
            </>
        )
    }
}
