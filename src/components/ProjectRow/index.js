import React from "react"
import Pill from "../Pill"

export default function ProjectRow({ rowName, pills }) {
    return (
        <div className="m-3">
            <div className="col-1 mb-1">
                <h6 style={{ fontFamily: "rubik" }} className="m-auto ">
                    {rowName}
                </h6>
            </div>
            <div className="col d-flex ml-">
                {pills.map((pill, i) => (
                    <div key={i} className="pillContainer m-1">
                        <Pill pillData={pill} />
                    </div>
                ))}
            </div>
        </div>
    )
}
