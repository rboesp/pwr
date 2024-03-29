import React from "react"

function SideIcon({ href, src }) {
    return (
        <figure className="sideBtns m-2">
            <a target="_blank" rel="noreferrer" href={href}>
                <img src={src} alt="social-icon" />
            </a>
        </figure>
    )
}

export default SideIcon
