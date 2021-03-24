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
                    <div className='border border-danger'>
                        <h1>Skills Breakdown</h1>
                        <Row>
                            <Col lg={6}>

                            </Col>
                            <Col >

                            </Col>
                        </Row>
                        <div className='d-flex flex-row'>
                            {
                                this.state.graphUrls.map(graphUrl => {
                                    return <Graph graphUrl={graphUrl}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
