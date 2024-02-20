import React from 'react';
import { Document, Page } from "react-pdf";
import resume from '../../assets/resume.pdf';

const Resume = () => {
    return (
        <>
            <Document file={resume}>
                <Page pageNumber={2} />
            </Document>
        </>
    )
}
export default Resume;