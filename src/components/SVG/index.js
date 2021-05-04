import React from 'react'

export default function SVG(props) {
    return (
        <svg 
            width={props.width} 
            height={props.height}
            viewBox={props.viewBox}
            version={props.version}
            xmlns={props.xmlns} 
            xmlnsXlink={props.xmlnsXlink}
            preserveAspectRatio={props.preserveAspectRatio}>
            {props.gText()}
        </svg>
    )
}
