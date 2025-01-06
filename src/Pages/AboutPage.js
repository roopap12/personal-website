// import React from "react";
// import "./../Styles/AboutPage.css"; // Import your CSS file for styling

// const AboutPage = () => {
//   const openResume = () => {
//     // Replace 'resume.pdf' with the actual filename of your resume PDF
//     const resumeURL = process.env.PUBLIC_URL + "/RoopaPatelCV.pdf";
//     window.open(resumeURL, "_blank");
//   };
//   return (
//     <div className="about-container">
//       <div className="about-content">
//         <div className="description">
//           <h2>About me</h2>
//           <div className="description-content">
//             <div className="left-content">
//               <p>
//                 Hello, I'm Roopa Patel, a dynamic Full Stack Web Developer and
//                 Cybersecurity Analyst based in Auckland. With a strong
//                 foundation in coding and a passion for innovation, I've honed my
//                 skills to deliver seamless solutions that drive results.
//               </p>

//               <p>
//                 My expertise spans across JavaScript, React, HTML, CSS, and
//                 MongoDB, with a special focus on AI and cybersecurity. I've
//                 successfully developed chatbots using FastAPI and Langchan,
//                 demonstrating my dedication to staying at the cutting edge of
//                 technology. My recent journey into cybersecurity has been both
//                 challenging and rewarding, as I've applied my technical acumen
//                 to real-world security challenges and contributed to the
//                 protection of digital assets.
//               </p>

//               <p>
//                 My professional journey is marked by a blend of technical
//                 leadership and strategic decision-making. I've held positions as
//                 a Director at Elite Business Services and Financial Controller
//                 at Avis Rental Cars, where I've led teams to success and made
//                 critical financial decisions that drove business growth.
//               </p>

//               <p>
//                 Beyond the corporate world, I've also been a Choreographer at
//                 Swaminarayan Temple, where I've expressed my creativity through
//                 dance. This creative outlet complements my technical pursuits,
//                 providing a well-rounded perspective on life and art.
//               </p>

//               <p>
//                 Currently, I'm deepening my knowledge in backend development,
//                 exploring various coding languages, and keeping pace with the
//                 latest tech trends. My commitment to personal well-being is as
//                 strong as my professional ambition. I practice yoga and
//                 meditation daily, which helps me maintain a balance between my
//                 professional and personal life, ensuring that I remain focused
//                 and energized in all aspects of my career.
//               </p>
//             </div>
//             <div className="right-content">
//               <img
//                 src={process.env.PUBLIC_URL + "/Roopap.jpg"}
//                 alt="Your Name"
//               />
//             </div>
//           </div>
//           <div className="resume-button-container">
//             <button className="resume-button" onClick={openResume}>
//               Resume
//             </button>
//           </div>

//           <h3>Education and Achievements</h3>
//           <ul>
//             <li>
//               Bachelor's Degree in Business - Major in Accounting and Auditing.
//             </li>
//             <li>
//               Introduced and assimilated a new software system, leading to a 40%
//               improvement in operational efficiency.
//             </li>
//             <li>
//               Boosted client base by 40%, resulting in increased revenue and
//               market presence.
//             </li>
//             <li>
//               Choreographed several dances at Swaminarayan Temple, showcasing my
//               creative side.
//             </li>
//             <li>
//               Completed Google Cybersecurity Professional Certificate.
//               <a
//                 href={
//                   process.env.PUBLIC_URL +
//                   "/certificates/GoogleCybersecurityProfessionalCertificate.pdf"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Google Cybersecurity Professional Certificate.pdf
//               </a>
//             </li>
//             <li>
//               Completed Software Development Certificate of Completion.
//               <a
//                 href={
//                   process.env.PUBLIC_URL +
//                   "/certificates/SoftwareDevelopmentCertificateofCompletion.pdf"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Software Development Job Simulation Certificate of
//                 Completion.pdf
//               </a>
//             </li>
//             <li>
//               Completed Cybersecurity Foundation Course from Coursera Microsoft
//               Online.
//               <a
//                 href={
//                   process.env.PUBLIC_URL +
//                   "/certificates/CyberSecurityCertificate.pdf"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Cyber Security Certificate.pdf
//               </a>
//             </li>
//             <li>
//               Completed Cybersecurity Play It Safe Manage Security Risks from
//               Coursera.
//               <a
//                 href={
//                   process.env.PUBLIC_URL +
//                   "/certificates/CyberSecurityPlayItSafeManageSecurityRisks.pdf"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Cyber Security Play It Safe Manage Security Risks.pdf
//               </a>
//             </li>
//             <li>
//               Achieved Cyber Security Certificate from Datacom.
//               <a
//                 href={
//                   process.env.PUBLIC_URL +
//                   "/certificates/CyberSecurityCertificateDatacom.pdf"
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Cyber Security Certificate Datacom.pdf
//               </a>
//             </li>

//             {/* Add more achievements as needed */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;

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
                Hello, I'm Roopa Patel, an Automation Specialist, Full Stack Web Developer, and Cybersecurity Analyst based in Auckland. With a robust foundation in coding, RPA (Robotic Process Automation), and AI technologies, I’ve cultivated a passion for creating innovative, scalable solutions that enhance operational efficiency.
              </p>

              <p>
                My expertise spans across JavaScript, React, HTML, CSS, MongoDB, and <strong>UiPath</strong> (RPA) with a special focus on <strong>Cybersecurity</strong> and <strong>Backend Development</strong>. I have experience designing and automating complex workflows, securing digital assets, and optimizing backend services using <strong>Node.js</strong> and <strong>Express</strong>. My recent work includes building <strong>AI-driven chatbots</strong> with <strong>FastAPI</strong> and <strong>Langchain</strong>, demonstrating my ability to stay ahead of the technology curve.
              </p>

              <p>
                As an Automation enthusiast, I have gained extensive knowledge of <strong>UiPath</strong> and other automation tools, applying them to solve real-world business challenges, streamline processes, and boost productivity across various industries.
              </p>

              <p>
                I have worked in various roles, including leadership positions such as <strong>Director at Elite Business Group</strong> and <strong>Financial Controller at Avis Rental Cars</strong>, where I leveraged my technical knowledge to implement strategic decision-making and foster business growth. Beyond business, I also express my creativity as a <strong>Choreographer at Swaminarayan Temple</strong>, balancing my technical pursuits with artistic expression.
              </p>

              <p>
                Currently, I'm deepening my expertise in <strong>Backend Development</strong>, exploring new coding languages, and keeping pace with the latest developments in <strong>Cybersecurity</strong> and <strong>Automation</strong>. Along with my professional endeavors, I practice <strong>yoga</strong> and <strong>meditation</strong> daily to maintain a healthy work-life balance, which helps me stay focused and energized in all aspects of my career.
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
              Completed <strong>UiPath Advanced RPA Developer</strong> certification.
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
                UiPath Academy Automation Developer Professional Training Certificate.pdf
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
              Completed <strong>Google Cybersecurity Professional Certificate</strong>.
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
              Completed <strong>Software Development Certificate of Completion</strong>.
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
                Software Development Job Simulation Certificate of Completion.pdf
              </a>
            </li>
            <li>
              Completed <strong>Cybersecurity Foundation Course</strong> from Coursera Microsoft
              Online.
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
              Completed <strong>Cybersecurity Play It Safe Manage Security Risks</strong> from
              Coursera.
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
