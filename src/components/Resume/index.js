import React, { Component } from 'react'
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import Pdf from '../../resume_pdf/Boespflug_Resume.pdf';

export default class Resume extends Component {

    render() {
        return (
            <div>
                <h1 className="p-4">
                    Resume
                </h1>

                <hr />

                <div className = "resume">
                    <a href = {Pdf} target = "_blank">Download Pdf</a>
                </div>

            </div>
        )
    }
}
