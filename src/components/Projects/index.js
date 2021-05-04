import React from 'react'
import ProjectCard from '../ProjectCard'

const technologies = [
    {
        name: 'JavaScript',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    }
]


function Projects({})  {
    return ( 
        <div className='project-page-container border border-danger m-5 bg-white'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className='projects-area border border-info m-5'>
                {
                    technologies.map( 
                        tech => {
                            return (
                            <ProjectCard 
                              name={tech.name} 
                              img={tech.img}
                            />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Projects