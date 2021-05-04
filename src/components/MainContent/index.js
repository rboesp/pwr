import React, { Component } from 'react'
import Homepage from '../Homepage';
import Projects from '../Projects';
import Resume from '../Resume';


export default class MainContent extends Component {

    renderCurrentPage = () => {
        switch (this.props.currentPage) {
            case 'Home':
                return <Homepage></Homepage>        
            case 'Projects':
                return <Projects></Projects>
            // case 'Resume':
            //     return <Resume></Resume>
            default:
                return <Homepage></Homepage>
        }
    }

    render() {
        return (
            <main className=' full-height main-content'>
                <div className='bg-light'>
                    {
                        this.renderCurrentPage()
                    }
                </div>
            </main>
        )
    }
}
