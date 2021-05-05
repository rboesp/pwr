import React, { useState, useEffect } from 'react';
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

const imgText= [
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
]

const pillData = {
    front: "Frontend",
    back: 'Backend',
    db: 'Databases',
    allPills: getPillData('all'),
    frontendPills: getPillData('frontend'),
    backendPills: getPillData('backend'),
    dbPills: getPillData('database')
}

const timedBlurbOptions = {
    currentImgIndex: 0,
    imgTextTimeShown: 3.5, //seconds long for testing, prod 3
}

const graphUrls = [
    firstGraph,
    secondGraph
]

const Timer = () => {
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
  
    useEffect(() => {
      // exit early when we reach 0
      if (currentImgIdx > 2) setCurrentImgIdx(0);
  
      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setCurrentImgIdx(currentImgIdx + 1);
      }, 1000);
  
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);

      // add timeLeft as a dependency to re-rerun the effect
      // when we update it
    }, [currentImgIdx]);
  
    return (
        <>
                <h1>{imgText[currentImgIndex].first}</h1>
        <br/>
        <h1>{imgText[currentImgIndex].second}</h1> 
        </>
    );
  };


export default function Homepage(props) {
    
    return (
        <>
            {/*my cover img here */}
            <figure className='p-0 m-0 border'>
                <div className='wrapper'>
                <div className="top-left">
                    <Timer seconds={5}/>
                </div>
                <img className='full-width sendToBack' src={CoverImg} alt=""></img>
                </div>
            </figure>

            <div className="ml-5 mr-5">
                <hr />
            </div>

            {/* about myself text */}
            <div className='m-4 '>
                <Bio />
            </div>

            <div className="ml-5 mr-5">
                <hr />
            </div>

            {/* pills area an heading*/}
            <div className='m-4'>
                <h2>
                    Technologies I like to work with
                </h2>

                <div className=''>
                    <ProjectRow rowName={pillData.front} pills={pillData.frontendPills}></ProjectRow>
                    <ProjectRow rowName={pillData.back} pills={pillData.backendPills}></ProjectRow>
                    <ProjectRow rowName={pillData.db} pills={pillData.dbPills}></ProjectRow>
                </div>
            </div>

            <div className="ml-5 mr-5">
                <hr />
            </div>

            {/* skills graphs */}
            <div className='m-4 '>
                <h2 className=''>Skills Breakdown</h2>
                <Row className='full-width '>
                {
                    graphUrls.map((graphUrl,i) => {
                        return (
                            <Col key={i} xs={12} sm={12} md={12} lg={6}>
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

