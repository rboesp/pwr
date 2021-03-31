import React, { Component } from 'react'
import Project from '../Project'

export default class ProjectCard extends Component {

    state = {
        projects: [
            {
                name: 'Online Pictionary',
                img: '', //or gif
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                <div>
                    {
                        this.state.projects.map(proj => <Project details={proj}></Project>)
                    }
                </div>
            </>
        )
    }
}
