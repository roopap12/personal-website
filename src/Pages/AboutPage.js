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
                Hello, I'm Roopa Patel, a dynamic Full Stack Web Developer and
                Cybersecurity Analyst based in Auckland. With a strong
                foundation in coding and a passion for innovation, I've honed my
                skills to deliver seamless solutions that drive results.
              </p>

              <p>
                My expertise spans across JavaScript, React, HTML, CSS, and
                MongoDB, with a special focus on AI and cybersecurity. I've
                successfully developed chatbots using FastAPI and Langchan,
                demonstrating my dedication to staying at the cutting edge of
                technology. My recent journey into cybersecurity has been both
                challenging and rewarding, as I've applied my technical acumen
                to real-world security challenges and contributed to the
                protection of digital assets.
              </p>

              <p>
                My professional journey is marked by a blend of technical
                leadership and strategic decision-making. I've held positions as
                a Director at Elite Business Services and Financial Controller
                at Avis Rental Cars, where I've led teams to success and made
                critical financial decisions that drove business growth.
              </p>

              <p>
                Beyond the corporate world, I've also been a Choreographer at
                Swaminarayan Temple, where I've expressed my creativity through
                dance. This creative outlet complements my technical pursuits,
                providing a well-rounded perspective on life and art.
              </p>

              <p>
                Currently, I'm deepening my knowledge in backend development,
                exploring various coding languages, and keeping pace with the
                latest tech trends. My commitment to personal well-being is as
                strong as my professional ambition. I practice yoga and
                meditation daily, which helps me maintain a balance between my
                professional and personal life, ensuring that I remain focused
                and energized in all aspects of my career.
              </p>
            </div>
            <div className="right-content">
              <img
                src={process.env.PUBLIC_URL + "/Roopap.jpg"}
                alt="Your Name"
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
              Introduced and assimilated a new software system, leading to a 40%
              improvement in operational efficiency.
            </li>
            <li>
              Boosted client base by 40%, resulting in increased revenue and
              market presence.
            </li>
            <li>
              Choreographed several dances at Swaminarayan Temple, showcasing my
              creative side.
            </li>
            <li>
              Completed Google Cybersecurity Professional Certificate.
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/GoogleCybersecurityProfessionalCertificate.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Cybersecurity Professional Certificate.pdf
              </a>
            </li>
            <li>
              Completed Software Development Certificate of Completion.
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/SoftwareDevelopmentCertificateofCompletion.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Software Development Job Simulation Certificate of
                Completion.pdf
              </a>
            </li>
            <li>
              Completed Cybersecurity Foundation Course from Coursera Microsoft
              Online.
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityCertificate.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Cyber Security Certificate.pdf
              </a>
            </li>
            <li>
              Completed Cybersecurity Play It Safe Manage Security Risks from
              Coursera.
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityPlayItSafeManageSecurityRisks.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Cyber Security Play It Safe Manage Security Risks.pdf
              </a>
            </li>
            <li>
              Achieved Cyber Security Certificate from Datacom.
              <a
                href={
                  process.env.PUBLIC_URL +
                  "/certificates/CyberSecurityCertificateDatacom.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
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
