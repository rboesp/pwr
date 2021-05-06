//react imports
import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"

//user-defined components
import Graph from "../Graph"
import Bio from "../Bio"
import ProjectRow from "../ProjectRow"

//images
import firstGraph from "../../graphs/first/Skills5_b.png"
import secondGraph from "../../graphs/second/Skills4_c.png"
import coverImg from "../../CoverImg/cover2.jpg"

//services
import getPillData from "../../services/pillData"

//stylesheet
import "./style.css"

//global variables
const graphUrls = [firstGraph, secondGraph]

const timedBlurbText = [
    { first: "Software", second: "Developer" },
    { first: "Full-Stack", second: "Developer" },
    { first: "Electronics", second: "Nerd" },
    { first: "Husband", second: "& Father" },
]

const timedBlurbOptions = {
    currentImgIndex: 0,
    imgTextTimeShown: 2.3, //seconds
}

const pillData = {
    front: "Frontend",
    back: "Backend",
    db: "Databases",
    allPills: getPillData("all"),
    frontendPills: getPillData("frontend"),
    backendPills: getPillData("backend"),
    dbPills: getPillData("database"),
}

/** components */

const HorizontalBreak = () => {
    return (
        <div className="ml-5 mr-5">
            <hr />
        </div>
    )
}

const Section = ({ component }) => <div className="m-4 ">{component}</div>

const Tech = () => (
    <>
        <h2>Technologies I like to work with</h2>

        <div className="">
            <ProjectRow rowName={pillData.front} pills={pillData.frontendPills}></ProjectRow>
            <ProjectRow rowName={pillData.back} pills={pillData.backendPills}></ProjectRow>
            <ProjectRow rowName={pillData.db} pills={pillData.dbPills}></ProjectRow>
        </div>
    </>
)

const Graphs = () => (
    <>
        <h2 className="">Skills Breakdown</h2>
        <Row className="full-width ">
            {graphUrls.map((graphUrl, i) => {
                return (
                    <Col key={i} xs={12} sm={12} md={12} lg={6}>
                        <Graph graphUrl={graphUrl} />
                    </Col>
                )
            })}
        </Row>
    </>
)

const TimedBlurb = () => {
    const [currentImgIdx, setCurrentImgIdx] = useState(timedBlurbOptions.currentImgIndex)

    useEffect(() => {
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            if (currentImgIdx >= timedBlurbText.length - 1) setCurrentImgIdx(timedBlurbOptions.currentImgIndex)
            else setCurrentImgIdx(currentImgIdx + 1)
        }, timedBlurbOptions.imgTextTimeShown * 1000)

        // cleanup - clear interval on re-render to avoid memory leaks
        //by setting multiple intervals
        return () => clearInterval(intervalId)

        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [currentImgIdx])

    return (
        <div className="top-left">
            <h1>{timedBlurbText[currentImgIdx].first}</h1>
            <br />
            <h1>{timedBlurbText[currentImgIdx].second}</h1>
        </div>
    )
}

export default function Homepage(props) {
    return (
        <>
            {/*cover img here */}
            <figure className="p-0 m-0 border">
                <div className="wrapper">
                    <TimedBlurb />
                    <img className="full-width sendToBack" src={coverImg} alt=""></img>
                </div>
            </figure>

            <HorizontalBreak />

            {/* about myself text */}
            <Section component={<Bio />} />

            <HorizontalBreak />

            {/* pills area and heading*/}
            <Section component={<Tech />} />

            <HorizontalBreak />

            {/* skills graphs */}
            <Section component={<Graphs />} />
        </>
    )
}
