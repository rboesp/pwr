import React from "react"
import Pill from "../Pill"
import { Col } from "react-bootstrap"

export default function Project(props) {
    console.log("************")
    console.log(props)
    const { details } = props
    const {
        name,
        img,
        desc,
        urlBlurb,
        url,
        src,
        // utilized,
        pills,
    } = details
    return (
        <Col xs={12}>
            <div className="card-wrapper row m-3">
                <div className="card-body col-8 ">
                    <h5 className="card-title">{name}</h5>
                    <div className="d-flex justify-content-start">
                        {pills.map((pill, i) => {
                            return (
                                <div key={i} className="pillContainer m-1">
                                    <Pill pillData={pill} />
                                </div>
                            )
                        })}
                    </div>
                    <p className="card-text mt-2">{desc}</p>
                    <a href={url} target="_blank" className="badge" rel="noreferrer">
                        {urlBlurb}
                    </a>
                </div>
                <figure className="col-4 m-auto ">
                    <img
                        src={src}
                        alt={name}
                        className="card-img-top"
                        style={
                            {
                                // height: "250px",
                                // width: "250px",
                            }
                        }
                    ></img>
                </figure>
            </div>
        </Col>
    )
}
