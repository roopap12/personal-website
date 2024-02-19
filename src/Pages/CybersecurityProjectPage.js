import React from "react";
import "./../Styles/CybersecurityPage.css";
import cybersecurityImage1 from "../CSRisk-assessment.jpg";
import cybersecurityImage2 from "../Report-In-linax.jpg";
import cybersecurityImage3 from "../SQL-Querry.jpg";
import cybersecurityRiskAssessmentReport from "../Cybersecurity-Risk-Assessment-Report.pdf";
import cybersecurityFilePermissionsReport from "../Cybersecurity-File-Permissions-Report.pdf";
import cybersecuritySQLFiltersReport from "../Cybersecurity-SQL-Filters-Report.pdf";

const CybersecurityPage = () => {
  return (
    <div className="cybersecurity-page">
      {/* Project Showcase Section */}
      <section className="project-showcase">
        <h2>Cybersecurity Projects Showcase</h2>
        {/* Project Cards Container */}
        <div className="project-cards-container">
          {/* Project Card 1 */}
          <div className="project-card">
            <a href="/cybersecurity-project-1" className="project-image">
              <img src={cybersecurityImage1} alt="Cybersecurity Project 1" />
            </a>
            <div className="project-description">
              <p>
                This Cybersecurity Project 1 focuses on a comprehensive risk
                assessment to identify, evaluate, and prioritize potential
                security threats. The report details the methodologies used, the
                identified risks, and the recommended mitigation strategies to
                safeguard critical assets and maintain the integrity of the
                system.
                <br />
                <a
                  href={cybersecurityRiskAssessmentReport}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the detailed risk assessment report
                </a>
              </p>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="project-card">
            <a href="/cybersecurity-project-2" className="project-image">
              <img src={cybersecurityImage2} alt="Cybersecurity Project 2" />
            </a>
            <div className="project-description">
              <p>
                This Cybersecurity Project 2 delves into the intricacies of file
                permissions in Linax, a popular Linux distribution. The report
                explores the best practices for managing file permissions, the
                implications of improper configurations, and the tools available
                for auditing and enforcing access controls.
                <br />
                <a
                  href={cybersecurityFilePermissionsReport}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the detailed file permissions report
                </a>
              </p>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="project-card">
            <a href="/cybersecurity-project-3" className="project-image">
              <img src={cybersecurityImage3} alt="Cybersecurity Project 3" />
            </a>
            <div className="project-description">
              <p>
                This Cybersecurity Project 3 is dedicated to the application of
                filters in SQL queries to enhance data security and integrity.
                The report discusses the importance of using filters to restrict
                access to sensitive data, the techniques for implementing
                effective filters, and the potential risks associated with
                inadequate filtering.
                <br />
                <a
                  href={cybersecuritySQLFiltersReport}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the detailed SQL filters report
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STAR Model Section */}
      <section className="star-model">
        <h2 className="star-model-heading">
          Star Model Scenario: Cybersecurity Projects Overview
        </h2>

        {/* Situation Section */}
        <div className="star-model-situation">
          <p className="star-model-description">
            <strong>Situation:</strong> As a cybersecurity professional, I have
            developed a series of projects aimed at enhancing security measures
            and protecting sensitive data across various domains, including risk
            assessment, file permissions in Linax, and SQL query filtering.
          </p>
        </div>

        {/* Task Section */}
        <div className="star-model-task">
          <p className="star-model-description">
            <strong>Task:</strong> My tasks included conducting comprehensive
            risk assessments, managing file permissions in Linax, and applying
            filters to SQL queries to ensure data security and integrity.
          </p>
        </div>

        {/* Action Section */}
        <div className="star-model-action">
          <p className="star-model-task-heading">
            <strong>Action:</strong> Enhancing Security Measures
          </p>
          <ul className="star-model-action-list">
            <li className="star-model-action-item">
              <strong>Action 1:</strong> Risk Assessment - Conducted thorough
              security assessments to identify and prioritize potential security
              threats.
            </li>
            <li className="star-model-action-item">
              <strong>Action 2:</strong> File Permissions - Managed file
              permissions in Linax to restrict access to sensitive data and
              maintain system integrity.
            </li>
            <li className="star-model-action-item">
              <strong>Action 3:</strong> SQL Query Filtering - Applied filters
              to SQL queries to prevent unauthorized access to sensitive
              information.
            </li>
            <li className="star-model-action-item">
              <strong>Action 4:</strong> Training and Awareness - Provided
              training materials to raise awareness about cybersecurity risks
              and promote safe online practices.
            </li>
          </ul>
        </div>

        {/* Result Section */}
        <div className="star-model-result">
          <p className="star-model-description">
            <strong>Result:</strong> The successful completion of these projects
            has led to improved security postures, reduced risk exposure, and
            increased confidence in the integrity and safety of digital assets.
            My work has contributed to the development of robust cybersecurity
            strategies and practices within the organizations I have worked
            with.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
