import React, { Component } from 'react'
import './style.css'
import CoverImg from '../../CoverImg/cover2.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'
import Bio from '../Bio'
import Pill from '../Pill'
import getPillData from '../../services/pillData'


export default class Homepage extends Component {

    state = {
        imgText: [
            {
                first: 'Software',
                second:'Developer'
            },
            {
                first: 'Full-Stack',
                second:'Developer'
            },
            {
                first: 'Electronics',
                second:'Nerd'
            },
            {
                first: 'Husband',
                second:''
            }
        ],
        currentImgIndex: 0,
        imgTextTimeShown: 3.5, //seconds long for testing, prod 3
        allPills: getPillData('all'),
        frontendPills: getPillData('frontend'),
        backendPills: getPillData('backend'),
        graphUrls : [
            firstGraph,
            secondGraph
        ]
    }

    componentDidMount = () => {
        let count = 0
        this.showNextImgText(count++)
        setInterval(() => {
            this.showNextImgText(count++)
            if(count === this.state.imgText.length) {
                count = 0
            }
        }, this.state.imgTextTimeShown*1000);
    }

    showNextImgText = num => {
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
                    <img className='full-width sendToBack' src={CoverImg} alt=""></img>
                    </div>
                </figure>

                {/* about myself text */}
                <div className='m-3'>
                    <Bio />
                </div>

                {/* pills area an heading*/}
                <div className='m-5'>
                    <h2>
                        Technologies I like to work with
                    </h2>
                    <div className='d-flex'>
                    Frontend
                    {
                        this.state.frontendPills.map(
                            pill => <>
                                <div className='pillContainer m-1'>
                                    <Pill pillData={pill}/>
                                </div>
                            </>
                        )
                    }
                    </div>
                    <div className='d-flex'>  
                    Backend                  
                    {
                        this.state.backendPills.map(
                            pill => <>
                                <div className='pillContainer m-1'>
                                    <Pill pillData={pill}/>
                                </div>
                            </>
                        )
                    }
                    </div>
                </div>

                {/* skills graphs */}
                <div className='ml-4 mt-5'>
                    <h2 className='p-3 '>Skills Breakdown</h2>
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
                </div>
            </>
        )
    }
}

