import React from "react";
import ecommerceVideo from "../Ecommerce-video.mp4";
import "../Styles/EcommerceProjectPage.css";

const EcommerceProjectPage = () => {
  return (
    <div className="ecommerce-page-container">
      {/* Video Section */}
      <div className="video-container">
        <video width="560" height="315" controls>
          <source src={ecommerceVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description Section */}
      <div className="description-container">
        <h2 className="star-model-heading">
          Star Model Scenario: Implementing Secure Data Fetching
        </h2>
        <p className="star-model-description">
          <strong>Situation:</strong> During the development of our e-commerce
          project, there arose a critical need to fetch sensitive data from the
          backend server. The nature of the data demanded a robust security
          framework to safeguard against potential threats and unauthorized
          access.
        </p>
        <p className="star-model-description">
          <strong>Task:</strong> My task was to implement a secure data fetching
          mechanism that adhered to industry standards and best practices. Given
          my background in Cybersecurity, I recognized the importance of
          establishing multiple layers of protection to ensure the
          confidentiality and integrity of the data.
        </p>

        {/* Action Section */}
        <div className="star-model-action">
          <p className="star-model-task-heading">
            <strong>Action:</strong> Safeguarding Data Integrity
          </p>
          <ul className="star-model-action-list">
            <li className="star-model-action-item">
              <strong>Action 1:</strong> Encryption Protocols - Implemented
              strong encryption protocols for data transmission between the
              frontend and backend, employing state-of-the-art algorithms to
              protect against eavesdropping.
            </li>
            <li className="star-model-action-item">
              <strong>Action 2:</strong> Token-based Authentication - Employed
              token-based authentication mechanisms, such as JSON Web Tokens
              (JWT), to ensure that only authenticated users could access the
              sensitive data. This added an extra layer of security by
              validating the identity of the user.
            </li>
            <li className="star-model-action-item">
              <strong>Action 3:</strong> Cross-Origin Resource Sharing (CORS) -
              Configured CORS policies to restrict access to the backend
              resources only from authorized domains, preventing potential
              security vulnerabilities associated with cross-origin requests.
            </li>
            <li className="star-model-action-item">
              <strong>Action 4:</strong> Input Validation - Implemented thorough
              input validation checks on the frontend and backend to mitigate
              the risk of injection attacks. This included sanitizing and
              validating user inputs to prevent malicious input from reaching
              the backend.
            </li>
          </ul>
        </div>

        <p className="star-model-description">
          <strong>Result:</strong> The implementation of these security measures
          resulted in a robust and secure data fetching system. The sensitive
          data was transmitted and stored with utmost confidentiality, and the
          project successfully passed security audits.
        </p>
      </div>
    </div>
  );
};

export default EcommerceProjectPage;
