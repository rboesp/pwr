import React from 'react'
import  SideOption from "../SideOption/";
import './style.css'
import SideIcon from '../SideIcon';


const nav_options = {
    icon_size : 35,
    nav_routes : [
        { name: `Bio`, url:'/' },
        { name: `Projects`, url:'/projects' },
        { name: `Resume` }
    ],
    social_icons: [
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


export default function Sidenav(props) {
    return (
        <div className='bg-dark sidenav-border sidenav-height '>
            <div className=' full-height d-flex flex-column justify-content-between'>
                    <div className=' full-width p-2'>
                    <h1 className='p-0 text-center white'>Robert Boespflug</h1>
                    <h6 className='p-0 text-center white'>Software Developer </h6>
                    <h6 className='p-0 text-center white'>Seattle, WA</h6>
                </div>
                <div id="basic-navbar-nav">
                    <div>
                        {
                            nav_options.nav_routes.map(
                                option => {
                                    return ( 
                                        <SideOption 
                                            name={option.name} 
                                            url={option.url}
                                            // iconUrl={option.value}
                                            key={option.name}>
                                        </SideOption>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <div className=' d-flex justify-content-around '>
                {
                    nav_options.social_icons.map( 
                        icon => 
                            <SideIcon 
                                key={icon.href} 
                                href={icon.href} 
                                src={icon.src} 
                            />
                        )
                }
                </div>
            </div>
        </div>
    )
}
