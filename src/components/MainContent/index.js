import React, { Component } from 'react'

export default class MainContent extends Component {
    render() {
        return (
            <main className=' full-height main-content'>
                <figure className='bg-dark quarter-height p-0 m-0'>
                    <span className='bg-white'>Pic</span>
                    {/* <img src="https://via.placeholder.com/150" alt="Trulli"></img> */}
                </figure>
                <div className='bg-light three-quarter-height'>
                    <div className='bio bg-info quarter-height'>
                        Bio
                    </div>
                    <div className='graph bg-success three-quarter-height'>
                        Graph
                    </div>
                </div>
            </main>
        )
    }
}
