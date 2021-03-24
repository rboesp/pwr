import React, { Component } from 'react'
import Contact from '../Contact';
import Homepage from '../Homepage';
import Projects from '../Projects';
import Resume from '../Resume';


export default class MainContent extends Component {

    renderCurrentPage = () => {
        switch (this.props.currentPage) {
            case 'Home':
                return <Homepage></Homepage>
                break;
        
            case 'Projects':
                return <Projects></Projects>
                break

            case 'Contact':
                return <Contact></Contact>
            break

            case 'Resume':
                return <Resume></Resume>
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
