import React, { Component } from 'react'
import logo from '../../logo/logo.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'
import Bio from '../Bio'

export default class MainContent extends Component {

    state = {
        graphUrls : [
            firstGraph,
            secondGraph
        ]
    }

    render() {
        return (
            <main className=' full-height main-content'>
                <figure className='p-0 m-0 border'>
                    <img className='full-width' src={logo} alt=""></img>
                </figure>
                <div className='bg-light'>
                    <div className='m-3'>
                        <Bio />
                    </div>
                    <div className='ml-4 mt-5'>
                        <h3 className='p-3 '>Skills Breakdown</h3>
                        <Row className='full-width '>
                        {
                            this.state.graphUrls.map(graphUrl => {
                                return (
                                    <Col className='' xs={12} sm={12} md={12} lg={6}>
                                        <Graph graphUrl={graphUrl}/>
                                    </Col>
                                )
                            })
                        }  
                        </Row>
                        {/* <div className='border d-flex flex-row justify-content-around align-items-center'>
                            {
                                this.state.graphUrls.map(graphUrl => {
                                    return (
                                        <div >
                                           
                                            <Graph graphUrl={graphUrl}/>
                                        </div>
                                    )
                                })
                            }
                        </div> */}
                    </div>
                </div>
            </main>
        )
    }
}
