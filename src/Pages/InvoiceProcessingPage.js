import React, { useEffect, useRef } from "react";
import "../Styles/InvoiceProcessingPage.css"; // Import custom styles for the Invoice Processing page

const InvoiceAutomationProject = () => {
  // Create a ref for the iframe element directly inside the component
  const iframeRef = useRef(null);

  // useEffect hook to autoplay and mute the video on page load
  useEffect(() => {
    if (iframeRef.current) {
      // Append autoplay and mute parameters to the src URL of the iframe
      iframeRef.current.src += "&autoplay=1&mute=1";
    }
  }, []); // Empty dependency array to run this effect once when the component mounts

  return (
    <div className="invoice-page-container">
      {/* Video Section */}
      <div className="video-container">
        <iframe
          ref={iframeRef} // Attach the ref to the iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4_wu8UKqDNE?si=WXugnO343JpemODF&autoplay=1&mute=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Description Section */}
      <div className="description-container">
        <h2 className="invoice-heading">
          Invoice Processing Automation: Streamlining Invoice Data Entry with RPA
        </h2>
        <p className="invoice-description">
          <strong>Overview:</strong> The **Invoice Processing Automation** project demonstrates my expertise in **Robotic Process Automation (RPA)** using **UiPath** to automate the extraction of key data points from **PDF invoices** and update them into a **database** or **Excel sheet**. This solution removes the need for manual data entry, speeds up the processing time, and ensures higher accuracy.
        </p>

        {/* Action Section */}
        <div className="invoice-action">
          <p className="invoice-task-heading">
            <strong>Core Actions:</strong>
            <br />
            <em>Automating the Invoice Process</em>
            <br />
            This project involves multiple phases to ensure the automation is seamless and accurate, from data extraction to updating the database.
          </p>

          <ul className="invoice-action-list">
            <li className="invoice-action-item">
              <strong>Action 1:</strong> Data Extraction from PDF Files – The bot extracts essential data from incoming **PDF invoices**, including **invoice number**, **date**, **vendor information**, and **amount** using **OCR (Optical Character Recognition)** technology.
            </li>
            <li className="invoice-action-item">
              <strong>Action 2:</strong> Data Validation – The system verifies that the extracted data is accurate and complies with predefined rules, such as correct invoice number format, valid vendor name, and amounts.
            </li>
            <li className="invoice-action-item">
              <strong>Action 3:</strong> Data Entry – After validation, the bot enters the extracted data into a **database** or **Excel file**, ensuring that the information is structured and ready for reporting.
            </li>
            <li className="invoice-action-item">
              <strong>Action 4:</strong> Exception Handling – The bot flags invoices that couldn't be processed or were identified with errors, alerting administrators to review and resolve.
            </li>
          </ul>
        </div>

        <p className="invoice-description">
          <strong>Next Steps:</strong> As the automation matures, we plan to integrate **AI-driven document understanding** to handle unstructured invoice formats, allowing the bot to process **various types of documents** with minimal human intervention. In the final phase, the system will be deployed to handle high volumes of invoices across multiple departments, providing a scalable solution for invoice processing.
        </p>
      </div>
    </div>
  );
};

export default InvoiceAutomationProject;
