import React, { Component } from 'react'
import ProjectComponent from '../Project'
import {Row} from 'react-bootstrap'
import getProjects from '../../services/projectData'

class Project {
    constructor(props) {
        
    }
    
}

export default class ProjectCard extends Component {

    state = {
        projects: getProjects()
    }


    render() {
        return (
            <>
                <div className='project-wrapper row  align-items-center'>
                    <h1 className='col-6'>
                        {this.props.name}
                    </h1>
                    <img src={this.props.img} style={
                        {
                        height: '20%',
                        width: '20%',
                        borderRadius: '5%'
                        }
                    }></img>
                </div>
                <div className='m-5 p-5 border border-primary'>
                    <Row class="">
                        {
                            this.state.projects.map(proj => <ProjectComponent details={proj}></ProjectComponent>)
                        }
                    </Row>
                </div>
            </>
        )
    }
}
