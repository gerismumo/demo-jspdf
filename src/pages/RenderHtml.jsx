import React from 'react'
import { jsPDF } from "jspdf";
import Report from './Report';

const RenderHtml = () => {
    const letters = [
        {
          recipientName: "Recipient 1",
          recipientAddress: "Address 1",
          reason: "Reason 1"
        },
        {
          recipientName: "Recipient 2",
          recipientAddress: "Address 2",
          reason: "Reason 2"
        },
      ];
    //   'l', 'mm', [1500, 1400]
    // 'p', 'mm', 'a4'
  const handleDownloadPdf = () => {
    const generatePDF = (index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doc = new jsPDF('l', 'mm', [1500, 1400]);
          const reportContainer = document.getElementById(`pdf-content-${index}`);
          //center the letter


          doc.html(reportContainer, {
            callback: function (pdf) {
              pdf.save(`letter_${index + 1}.pdf`);
              resolve();
            },
            x: 12,
            y: 12,
          });
        }, 1000); 
      });
    };
  
    const generatePDFsSequentially = async () => {
      for (let index = 0; index < letters.length; index++) {
        await generatePDF(index);
      }
    };
  
    generatePDFsSequentially();
  };
  
  return (
    <div >
       {letters.map((letter, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Report
            recipientName={letter.recipientName}
            recipientAddress={letter.recipientAddress}
            reason={letter.reason}
            index={index}
          />
        </div>
        ))}
        <div className="btn">
            <button onClick={handleDownloadPdf}>Download PDF</button>
        </div>
    </div>
  )
}

export default RenderHtml