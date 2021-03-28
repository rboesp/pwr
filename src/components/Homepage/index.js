import React, { Component } from 'react'
import './style.css'
import CoverImg from '../../CoverImg/cover2.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'
import Bio from '../Bio'

export default class Homepage extends Component {

    state = {
        graphUrls : [
            firstGraph,
            secondGraph
        ],
        imgText: [
            {
                first: 'Software',
                second:'Developer'
            }
        ],
        currentImgIndex: 0
    }

    getNextImg = num => {
        this.setState({currentImgIndex: num})
    }

    getCurrentImg = () => {
        return this.state.imgText[this.state.currentImgIndex]
    }

    render() {
        return (
            <>
                {/*my cover img here */}
                <figure className='p-0 m-0 border'>
                    <div className='wrapper'>
                    <div className="top-left">
                        <h1>{this.getCurrentImg().first}</h1>
                        <br/>
                        <h1>{this.getCurrentImg().second}</h1>
                    </div>
                    <img className='full-width f' src={CoverImg} alt=""></img>
                    </div>
                </figure>

                {/* about myself text */}
                <div className='m-3'>
                    <Bio />
                </div>

                {/* should put pills here! (currently in Bio above) */}

                {/* skills graphs */}
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
            </>
        )
    }
}

