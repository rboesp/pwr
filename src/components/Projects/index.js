import React from "react"
import ProjectCard from "../ProjectCard"

const technologies = [
    {
        name: "JavaScript",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
]

function Projects() {
    return (
        <div className="project-page-container p-4 bg-white">
            <div className="projects-title">
                <h1>Projects</h1>
            </div>
            <div className="projects-area">
                {technologies.map((tech) => (
                    <ProjectCard key={tech.name} name={tech.name} img={tech.img} />
                ))}
            </div>
        </div>
    )
}

export default Projects
