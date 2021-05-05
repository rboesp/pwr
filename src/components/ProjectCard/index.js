import React from 'react'
import ProjectComponent from '../Project'
import {Row} from 'react-bootstrap'
import getProjects from '../../services/projectData'


export default function ProjectCard({img, name})  {    
    return (
        <>
            <div className='project-wrapper row  align-items-center'>
                <h1 className='col-6'>
                    {name}
                </h1>
                <img src={img} style={
                    {
                    height: '20%',
                    width: '20%',
                    borderRadius: '5%'
                    }
                }></img>
            </div>
            <div className='m-5 p-5 border border-primary'>
                <Row className="">
                    {
                        getProjects()
                        .map(
                            proj => 
                                <ProjectComponent details={proj} />
                        )
                    }
                </Row>
            </div>
        </>
    )
}

