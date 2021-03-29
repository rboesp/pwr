import React, { Component } from 'react'
import './style.css'
import CoverImg from '../../CoverImg/cover2.jpg'
import Graph from '../Graph'
import firstGraph from '../../graphs/first/Skills5_b.png'
import secondGraph from '../../graphs/second/Skills4_c.png'
import { Col, Row } from 'react-bootstrap'
import Bio from '../Bio'
import Pill from '../Pill'

const getPillData = () => { //get this from file
    return { //later multiple pills
        name: 'Angular', 
        bgColor: '#dd0031',
        color: 'white', 
        d_s: ["M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z", "M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z", "M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z"],
        fills: ["#E23237", "#B52E31", "#FFFFFF"] 
    }
}

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
        pills: [
            getPillData()
        ],
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
                    <img className='full-width f' src={CoverImg} alt=""></img>
                    </div>
                </figure>

                {/* about myself text */}
                <div className='bioArea m-3'>
                    <Bio />
                </div>

                {/* pills area an heading*/}
                <div className='skillsArea badges m-5'>
                    <h2>
                        Technologies I like to work with
                    </h2>
                    {
                        this.state.pills.map(pill => <Pill pillData={pill}/>)
                    }
                </div>

                {/* skills graphs */}
                <div className='graphArea ml-4 mt-5'>
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

