import React, { Component } from 'react'
import ProjectCard from '../ProjectCard'

// border border-danger

export default class Projects extends Component {

    state = {
        technologies : [
            {
                name: 'JavaScript',
                img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            }
        ]
    }

    render() {
        return ( 
            <>
                <div className='project-page-container border border-danger m-5 bg-white'>
                    <div className='projects-title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='projects-area border border-info m-5'>
                        {
                            this.state.technologies.map( tech => <ProjectCard name={tech.name} img={tech.img}/>)
                        }
                    </div>
                </div>
            </>
        )
    }
}
