import React from 'react'
import SVG from '../SVG'

const getG = (pillData) => {
    // console.log(pillData)
    return (
        <g>
            {
                pillData.d_s.map((d, i) => {
                    return (
                        <path 
                            key={i}
                            d={d}
                            fill={pillData.fills[i]}>  
                        </path>
                    )
                })
            }
        </g>
    )
}

function Pill({pillData})  {
    return (
        <span 
            className='badge rounded-pill font-exempt banger' 
            style={
                {
                    backgroundColor: pillData.bgColor,
                    color : pillData.color
                }
            }
        >
        <span 
            className='font-exempt' 
            style={
                {
                    padding: "5px"
                }
            }
        >
            {pillData.name}
        </span>
        <SVG 
            height={24}
            width={24}
            viewBox={pillData.viewBox} 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            preserveAspectRatio="xMidYMid"
            gText={() => getG(pillData)}
        />
        </span>
    )
}


export default Pill