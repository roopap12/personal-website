import React from "react";
import "./../Styles/AboutPage.css"; // Import your CSS file for styling

const AboutPage = () => {
  const openResume = () => {
    // Replace 'resume.pdf' with the actual filename of your resume PDF
    const resumeURL = process.env.PUBLIC_URL + "/RoopaPatelCV.pdf";
    window.open(resumeURL, "_blank");
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="description">
          <h2>About me</h2>
          <div className="description-content">
            <div className="left-content">
              <p>
                Hello, I’m Roopa Patel — a certified RPA Developer,
                Cybersecurity Analyst, and Backend Developer based in Auckland.
              </p>

              <p>
                With a background in business and finance, I’ve transitioned
                into technology to build secure, scalable, and user-centric
                solutions that bridge business needs with technical innovation.
              </p>

              <p>
                My core strengths lie in automation (UiPath, Power Automate),
                backend development (Node.js, Python, SQL), and cybersecurity
                (network security, IDS/IPS, risk assessment). I’ve applied these
                skills across real-world projects, including:
                <ul>
                  <li>An AI-driven DDoS detection system (in progress)</li>
                  <li>Retail automation bots for inventory audits</li>
                  <li>An AI-powered meditation app with chatbot integration</li>
                  <li>
                    A secure e-commerce platform tailored for the NZ market
                  </li>
                </ul>
              </p>

              <p>
                I specialise in streamlining operations, automating workflows,
                and strengthening digital security. With a unique blend of
                technical execution and business analysis, I thrive in roles
                that require both precision and purpose.
              </p>

              <p>
                Previously, I led data migration and automation initiatives as
                Director at Elite Business Group, and drove systems optimisation
                as Financial Controller at Avis Rental Cars.
              </p>

              <p>
                Beyond work, I’m a lifelong learner — currently pursuing PMP
                certification — and I balance my career with daily yoga,
                meditation, and choreography at the Swaminarayan Temple.
              </p>

              <p>
                Let’s connect and create impactful digital solutions together.
              </p>
            </div>
            <div className="right-content">
              <img
                src={process.env.PUBLIC_URL + "/Roopap.jpg"}
                alt="Roopa Patel"
              />
            </div>
          </div>
          <div className="resume-button-container">
            <button className="resume-button" onClick={openResume}>
              Resume
            </button>
          </div>

          <h3>Education and Achievements</h3>
          <ul>
            <li>
              <strong>UiPath Advanced RPA Developer</strong> – Completed 2024
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/UiPathAcademyAutomationDeveloperProfessionalTrainingCertificate.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                UiPath Academy Automation Developer Professional Training
                Certificate.pdf
              </a>
            </li>
            <li>
              <strong>Google Cybersecurity Professional Certificate</strong> –
              Completed 2024
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/GoogleCybersecurityProfessionalCertificate.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Google Cybersecurity Professional Certificate.pdf
              </a>
            </li>
            <li>
              <strong>Cybersecurity Foundation Course</strong> from Coursera
              Microsoft Online – Completed 2023
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityCertificate.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Cyber Security Certificate.pdf
              </a>
            </li>
            <li>
              <strong>Cybersecurity Play It Safe Manage Security Risks</strong>{" "}
              from Coursera – Completed 2023
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityPlayItSafeManageSecurityRisks.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Cyber Security Play It Safe Manage Security Risks.pdf
              </a>
            </li>
            <li>
              <strong>Cyber Security Certificate</strong> from Datacom
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityCertificateDatacom.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Cyber Security Certificate Datacom.pdf
              </a>
            </li>
            <li>
              <strong>Software Development Certificate of Completion</strong>
              <br />
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/SoftwareDevelopmentCertificateofCompletion.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                Software Development Job Simulation Certificate of
                Completion.pdf
              </a>
            </li>
            <li>
              <strong>Bachelor's Degree in Business</strong> – Major in
              Accounting and Auditing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
