import React, { Component } from 'react'
import logo from '../../logo/logo.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'

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
                    <div className='bio quarter-height'>
                        <h1>Bio</h1>
                    </div>
                    <div className='p-1'>
                        <h1>Skills Breakdown</h1>
                        <Row className='full-width border border-danger'>
                        {
                            this.state.graphUrls.map(graphUrl => {
                                return (
                                    <Col className='border border-info' xs={12} sm={12} md={12} lg={6}>
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
