import React, { Component } from 'react'
import logo from '../../logo/logo.jpg'

export default class MainContent extends Component {
    render() {
        return (
            <main className=' full-height main-content'>
                <figure className='border border-info p-0 m-0 border'>
                    <img className='full-height-width' src={logo} alt=""></img>
                </figure>
                <div className='bg-light three-quarter-height'>
                    <div className='bio quarter-height'>
                        Bio
                    </div>
                    <div className='graph three-quarter-height'>
                        Graph
                    </div>
                </div>
            </main>
        )
    }
}
