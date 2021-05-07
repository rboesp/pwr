import React from "react"
import Project from "../Project"
import { Row } from "react-bootstrap"
import getProjects from "../../services/projectData"

export default function ProjectCard({ img, name }) {
    return (
        <>
            {/* <div className="project-wrapper row  align-items-center">
                <h1 className="col-6">{name}</h1>
                <img
                    src={img}
                    style={{
                        height: "20%",
                        width: "20%",
                        borderRadius: "5%",
                    }}
                ></img>
            </div> */}
            <div className="p-4">
                <Row className="">
                    {getProjects().map((proj, i) => (
                        <Project key={i} details={proj} />
                    ))}
                </Row>
                {/* <a href="https://imgbb.com/">
                    <img src="https://i.ibb.co/WKZ6qfv/ezgif-com-gif-maker.gif" alt="ezgif-com-gif-maker" border="0" />
                </a> */}
            </div>
        </>
    )
}
