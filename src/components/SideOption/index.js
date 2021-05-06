import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
import Pdf from "../../resume_pdf/Boespflug_Resume.pdf"

const sideOptionClassNames = "p-2 sideBtns d-flex justify-content-center"

export default function SideOption({ name, url }) {
    return name === "Resume" ? (
        <a href={Pdf} target="_blank" rel="noreferrer" className={sideOptionClassNames}>
            <h5>Resume</h5>
        </a>
    ) : (
        <Link to={url} className={sideOptionClassNames}>
            <h5>{name}</h5>
        </Link>
    )
}
