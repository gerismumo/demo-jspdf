import React, { useRef, useState } from 'react';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const stockRecords = [
    {
      product: 'Drink 1',
      quantity: 10,
      price: 100
    },
    {
      product: 'Drink 1',
      quantity: 10,
      price: 100
    },
    {
      product: 'Drink 1',
      quantity: 10,
      price: 100
    },
    {
      product: 'Drink 1',
      quantity: 10,
      price: 100
    },
  ]

const RenderDoc = () => {
    const [numReports, setNumReports] = useState(1);

  const downloadReport = () => {
    for (let i = 0; i < numReports; i++) {
      const doc = new jsPDF();

      doc.addImage('../../images/download (1).png', 'PNG', 10, 10, 30, 30);

      doc.setFontSize(12);
      doc.text('123 Main Street', 10, 50);
      doc.setFontSize(12);
      doc.text('City, State, Zip Code', 10, 60);
      doc.setFontSize(12);
      doc.text('Email: johndoe@example.com', 10, 70);
      doc.setFontSize(12);
      doc.text('Phone: (123) 456-7890', 10, 80);
      doc.setFontSize(12);
      doc.text('Date: April 26, 2024', 10, 90);

      doc.autoTable({
        startY: 100,
        head: [['Product', 'Quantity', 'Price']],
        body: stockRecords.map(record => [record.product, record.quantity, record.price]),
      });

      const totalCost = stockRecords.reduce((acc, record) => acc + record.quantity * record.price, 0);
      const vat = totalCost * 0.15; 

      const pageWidth = doc.internal.pageSize.getWidth(); 

      doc.setFontSize(12);
      doc.text(`Total Cost: ${totalCost.toFixed(2)}`, pageWidth - 60, doc.autoTable.previous.finalY + 10);
      doc.setFontSize(12);
      doc.text(`VAT (15%): ${vat.toFixed(2)}`, pageWidth - 60, doc.autoTable.previous.finalY + 20);

      doc.save(`liquor_report_${i + 1}.pdf`);
    }
  };


  const handleNumReportsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumReports(isNaN(value) ? 0 : value);
  };
  return (
    <div className="doc-page">
      <div className="doc">
        <div className="input">
          <label htmlFor="">Number of reports</label>
          <input
            type="number"
            value={numReports}
            onChange={handleNumReportsChange}
            min={1}
            placeholder='number of reports'
          />
        </div>
        <button onClick={downloadReport}>Download Report</button>
      </div>
    </div>
  )
}

export default RenderDoc