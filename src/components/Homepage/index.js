import React, { Component } from 'react'
import './style.css'
import CoverImg from '../../CoverImg/cover2.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'
import Bio from '../Bio'
import ProjectRow from '../ProjectRow'
import getPillData from '../../services/pillData'
import Resume from '../Resume'
// import Pill from '../Pill'


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
        front: "Frontend",
        back: 'Backend',
        db: 'Databases',
        allPills: getPillData('all'),
        frontendPills: getPillData('frontend'),
        backendPills: getPillData('backend'),
        dbPills: getPillData('database'),
        currentImgIndex: 0,
        imgTextTimeShown: 3.5, //seconds long for testing, prod 3
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
                <div className='m-3 border'>
                    <Bio />
                </div>

                {/* pills area an heading*/}
                <div className='m-3 border'>
                    <h2>
                        Technologies I like to work with
                    </h2>
                
                    <div className=''>
                        <ProjectRow rowName={this.state.front} pills={this.state.frontendPills}></ProjectRow>
                        <ProjectRow rowName={this.state.back} pills={this.state.backendPills}></ProjectRow>
                        <ProjectRow rowName={this.state.db} pills={this.state.dbPills}></ProjectRow>
                    </div>
                </div>

                {/* skills graphs */}
                <div className='m-3 border'>
                    <h2 className=''>Skills Breakdown</h2>
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

