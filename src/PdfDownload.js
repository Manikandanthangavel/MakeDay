import React, { Component } from 'react';
import jspdf from 'jspdf';
import PDF from'./Chandraprakash.pdf';
 class PdfDownload extends Component {
   
    render() {
        return (
            <div>
               <a href={PDF} id='dd' >Resume</a> 
                        
            </div>
        )
    }
}

export default PdfDownload;
