// Report.js

import React from 'react';

const Report = ({ recipientName, recipientAddress, reason, index }) => {
  return (
    <div id={`pdf-content-${index}`} style={{ width: "210mm", height: "297mm" ,padding: "20px 40px" }} className="formal-letter">
      <div className="header">
        <div className="logo">
          <img src="../../images/download (1).png" alt=""
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
        </div>
        <h2>John Doe</h2>
        <p>123 Main Street</p>
        <p>City, State, Zip Code</p>
        <p>Email: johndoe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Date: April 26, 2024</p>
      </div>
      <div className="content">
        <p>{`Recipient's Name: ${recipientName}`}</p>
        <p>{`Recipient's Address: ${recipientAddress}`}</p>
        <p>City, State, Zip Code</p>
        <br />
        <p>Dear {recipientName},</p>
        <br />
        <p>
          I am writing to express my interest in {reason}.
        </p>
        <p>
          [Body of the letter, expressing thoughts, intentions, requests, etc.]
        </p>
        <br />
        <p>Sincerely,</p>
        <p>John Doe</p>
      </div>
    </div>
  );
};

export default Report;
