import React, { Component } from 'react'
import Project from '../Project'

export default class ProjectCard extends Component {

    state = {
        projects: [
            {
                name: 'Online Pictionary',
                img: '', //or gif
                desc: '',
                urlBlurb: '',
                url: '',
                utilized: ''
            }
        ]
    }


    render() {
        return (
            <>
                <div className='project-wrapper row  align-items-center'>
                    <h1 className='col-6 text-center'>
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
                <div>
                    {
                        this.state.projects.map(proj => <Project details={proj}></Project>)
                    }
                </div>
            </>
        )
    }
}
