import React from 'react';
import { Document, Page } from "react-pdf";

import pdfFile from '../../assets/resume.pdf';

const Resume = () => {
    console.log(pdfFile);
    return (
        <>
            <Document file={pdfFile}>
                <Page pageNumber={2} />
            </Document>
        </>
    )
}
export default Resume;