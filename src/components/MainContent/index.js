import React, { Component } from 'react'
import Homepage from '../Homepage';
import Projects from '../Projects';


export default class MainContent extends Component {

    renderCurrentPage = () => {
        switch (this.props.currentPage) {
            case 'Home':
                return <Homepage></Homepage>
                break;
        
            case 'Projects':
                return <Projects></Projects>
                break
            default:
                return <Homepage></Homepage>
                break;
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
