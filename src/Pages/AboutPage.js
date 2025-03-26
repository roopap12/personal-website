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
                Hello, I'm Roopa Patel — a certified RPA Developer,
                Cybersecurity Analyst, and Backend Developer based in Auckland.
                With a strong background in business and finance, I transitioned
                into tech to build secure, scalable solutions that solve
                real-world problems.
              </p>

              <p>
                My expertise lies in automation (UiPath, Power Automate),
                backend development (Node.js, Python, SQL), and cybersecurity
                (network security, risk assessment, IDS/IPS). I’ve applied these
                skills across a range of projects — including an AI-driven DDoS
                detection system, retail audit bots, and a meditation app with
                AI chatbot integration.
              </p>

              <p>
                I specialize in streamlining operations and enhancing digital
                security through automation. With hands-on experience in both
                technical execution and business analysis, I bridge the gap
                between process efficiency and system innovation.
              </p>

              <p>
                Previously, I served as Director at Elite Business Group and
                Financial Controller at Avis Rental Cars, where I led data
                migration, automation, and system integration projects that
                significantly improved operational outcomes.
              </p>

              <p>
                Outside of my professional pursuits, I’m dedicated to lifelong
                learning — currently progressing toward PMP certification while
                staying current with emerging technologies. I also balance my
                career with daily yoga, meditation, and creative expression
                through choreography at Swaminarayan Temple.
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
              Bachelor's Degree in Business - Major in Accounting and Auditing.
            </li>
            <li>
              Completed <strong>UiPath Advanced RPA Developer</strong>{" "}
              certification.
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
              Introduced and assimilated a new software system, leading to a 40%
              improvement in operational efficiency.
            </li>
            <li>
              Boosted client base by 40%, resulting in increased revenue and
              market presence.
            </li>
            <li>
              Completed{" "}
              <strong>Google Cybersecurity Professional Certificate</strong>.
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
              Completed{" "}
              <strong>Software Development Certificate of Completion</strong>.
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
              Completed <strong>Cybersecurity Foundation Course</strong> from
              Coursera Microsoft Online.
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
              Completed{" "}
              <strong>Cybersecurity Play It Safe Manage Security Risks</strong>{" "}
              from Coursera.
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
              Achieved <strong>Cyber Security Certificate</strong> from Datacom.
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
            {/* Add more achievements as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
