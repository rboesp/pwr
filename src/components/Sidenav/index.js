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
                <div className='bg-dark  sidenav-border sidenav-height'>
                    <div className=' d-flex flex-column  full-height'>
                        <Navbar expand="lg" className="p-0 m-0 d-flex flex-column justify-content-between full-height border border-danger ">
                             <div className='border border-warning p-2'>
                                <h1 className='p-0 text-center white'>Robert Boespflug</h1>
                            </div>
                            <div id="basic-navbar-nav" className='border border-info flex-grow-0 d-flex flex-column justify-content-around full-height full-width pt-5'>
                                {/* <div id='navbarSupportedContent' className=' d-flex flex-column border justify-content-between'> */}
                                    {/* hi */}
                                    <div className=' full-height-width '>
                                        <div className='  full-height-width d-flex justify-content-center'>
                                            <div className='d-flex flex-column align-items-center full-width mb-5'>
                                                <div className='full-width'>
                                                    {
                                                    this.state.nav_options.map(
                                                        option => {
                                                            console.log(option);
                                                            return <SideOption switchPage={this.props.switchPage} name={option.name} iconUrl={option.value}></SideOption>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  id='navbarSupportedContent' className='border m-0 p-0 full-height d-flex justify-content-center align-items-center'>
                                        <figure className='border text-center full-height-width'>
                                            <img className='border'></img>
                                        </figure>
                                        <figure className='border text-center full-height-width'>
                                            <img className='border'></img>
                                        </figure>
                                    </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </>
        )
    }
}
