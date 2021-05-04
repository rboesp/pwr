import React, { Component } from 'react'
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Pdf from '../../resume_pdf/Boespflug_Resume.pdf';

export default class Resume extends Component {

    render() {
        return (
            // <div className = "resume">
                <a href = {Pdf} target = "_blank">
                    <h5 className=''>
                        Resume
                    </h5>
                </a>
            // </div>
        )
    }
}
