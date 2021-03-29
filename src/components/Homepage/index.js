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
    return [
        { 
            name: 'Angular', 
            bgColor: '#dd0031',
            color: 'white', 
            d_s: ["M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z", "M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z", "M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z"],
            fills: ["#E23237", "#B52E31", "#FFFFFF"] 
        },
        { 
            name: 'Node.js', 
            bgColor: '#339933',
            color: 'whitesmoke', 
            d_s: ["M127.999999,288.463771 C124.024844,288.463771 120.314699,287.403728 116.869564,285.548656 L81.6231884,264.612838 C76.32298,261.697724 78.9730854,260.637682 80.5631458,260.107661 C87.7184259,257.72257 89.0434775,257.192547 96.4637688,252.952381 C97.2587979,252.422361 98.3188405,252.687372 99.1138718,253.217392 L126.144927,269.383024 C127.20497,269.913045 128.530021,269.913045 129.325053,269.383024 L235.064182,208.165634 C236.124225,207.635611 236.654245,206.575571 236.654245,205.250519 L236.654245,83.0807467 C236.654245,81.7556929 236.124225,80.6956526 235.064182,80.1656324 L129.325053,19.2132506 C128.26501,18.6832305 126.939959,18.6832305 126.144927,19.2132506 L20.4057954,80.1656324 C19.3457551,80.6956526 18.8157349,82.0207041 18.8157349,83.0807467 L18.8157349,205.250519 C18.8157349,206.31056 19.3457551,207.635611 20.4057954,208.165634 L49.2919247,224.861286 C64.9275364,232.811595 74.7329196,223.536234 74.7329196,214.260871 L74.7329196,93.681159 C74.7329196,92.0910985 76.0579711,90.5010358 77.9130428,90.5010358 L91.4285716,90.5010358 C93.0186343,90.5010358 94.6086948,91.8260873 94.6086948,93.681159 L94.6086948,214.260871 C94.6086948,235.196689 83.2132512,247.387164 63.3374737,247.387164 C57.2422362,247.387164 52.4720502,247.387164 38.9565214,240.761906 L11.1304347,224.861286 C4.24016581,220.886129 5.68434189e-14,213.46584 5.68434189e-14,205.515528 L5.68434189e-14,83.3457557 C5.68434189e-14,75.3954465 4.24016581,67.9751552 11.1304347,64.0000006 L116.869564,2.78260752 C123.494824,-0.927535841 132.505176,-0.927535841 139.130436,2.78260752 L244.869565,64.0000006 C251.759834,67.9751552 256,75.3954465 256,83.3457557 L256,205.515528 C256,213.46584 251.759834,220.886129 244.869565,224.861286 L139.130436,286.078676 C135.685299,287.668739 131.710145,288.463771 127.999999,288.463771 L127.999999,288.463771 Z M160.596274,204.455488 C114.219461,204.455488 104.679089,183.254659 104.679089,165.233955 C104.679089,163.643893 106.004141,162.053832 107.859212,162.053832 L121.639752,162.053832 C123.229813,162.053832 124.554864,163.113872 124.554864,164.703935 C126.674947,178.749484 132.770187,185.639753 160.861283,185.639753 C183.122154,185.639753 192.662526,180.604556 192.662526,168.67909 C192.662526,161.788821 190.012423,156.753624 155.296065,153.308489 C126.409938,150.393375 108.389235,144.033126 108.389235,120.977226 C108.389235,99.5113875 126.409938,86.7908901 156.621119,86.7908901 C190.542443,86.7908901 207.238095,98.4513472 209.358178,123.89234 C209.358178,124.687371 209.093167,125.482403 208.563147,126.277434 C208.033127,126.807454 207.238095,127.337474 206.443064,127.337474 L192.662526,127.337474 C191.337475,127.337474 190.012423,126.277434 189.747412,124.952382 C186.567289,110.376813 178.351966,105.606625 156.621119,105.606625 C132.240165,105.606625 129.325053,114.086957 129.325053,120.447205 C129.325053,128.132506 132.770187,130.5176 165.631471,134.757766 C198.227744,138.997931 213.598344,145.093169 213.598344,167.884058 C213.333333,191.20497 194.252589,204.455488 160.596274,204.455488 L160.596274,204.455488 Z"],
            fills: ["whitesmoke"] 
        }
    ]
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
        pills: getPillData(),
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
                    {
                        this.state.pills.map(
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

