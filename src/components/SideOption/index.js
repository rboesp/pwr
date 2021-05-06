import React from "react"
import "./style.css"
import { Link } from "react-router-dom"
import Pdf from "../../resume_pdf/Boespflug_Resume.pdf"

const sideOptionClassNames = "p-2 sideBtns d-flex justify-content-center"

function OptionName({ name }) {
    return <h4 style={{ color: "whitesmoke" }}>{name}</h4>
}

export default function SideOption({ name, url }) {
    return name === "Resume" ? (
        <a href={Pdf} target="_blank" rel="noreferrer" className={sideOptionClassNames}>
            <OptionName name="Resume" />
        </a>
    ) : (
        <Link to={url} className={sideOptionClassNames}>
            <OptionName name={name} />
        </Link>
    )
}
