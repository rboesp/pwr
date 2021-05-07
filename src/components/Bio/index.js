import React from "react"

function Blurb({ text }) {
    return (
        <p
            style={{
                fontSize: "larger",
                fontFamily: "rubik",
            }}
            className="col-12 m-1"
        >
            {text}
        </p>
    )
}

export default function Bio(props) {
    return (
        <div className="row p-4">
            {/* <Blurb text="Welcome to my personal site." /> */}
            <Blurb text="CS grad from Oregon State University now living in Seattle, WA." />
            <Blurb text="Currently teaching Full Stack Development at University of Washington's Full Stack Coding Bootcamp." />
            <Blurb text="Open to software development positions in the Seattle area." />
        </div>
    )
}
