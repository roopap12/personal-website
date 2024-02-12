import React from 'react';
import './../Styles/AboutPage.css'; // Import your CSS file for styling

const AboutPage = () => {
  const openResume = () => {
    // Replace 'resume.pdf' with the actual filename of your resume PDF
    const resumeURL = process.env.PUBLIC_URL + '/RoopaPatelCV.pdf';
    window.open(resumeURL, '_blank');
  };
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="description">
          <h2>About me</h2>
          <div className="description-content">
            <div className="left-content">
            <p>
            Hi, I'm Roopa Patel, a results-driven Full Stack Web Developer based in Auckland. My passion lies in creating seamless and innovative solutions, blending my expertise in coding and diverse industry experience.
          </p>

          <p>
            I specialize in Javascript, React, HTML, CSS, and MongoDB, with hands-on experience in AI. I've crafted chatbots using FastAPI and Langchan, showcasing my commitment to staying at the forefront of technology. Currently, I'm channeling my efforts into becoming a Cyber Security Analyst, integrating my learning into ongoing projects.
          </p>

          <p>
          Beyond coding, my professional journey includes successful tenures as a Director at Elite Business Services and Financial Controller at Avis Rental Cars, where I demonstrated strong leadership skills. I bring a unique blend of technical prowess and strategic decision-making to every project.
          </p>

          <p>
            As a seasoned Choreographer at Swaminarayan Temple, I've had the privilege of showcasing my creative prowess in the world of arts. Simultaneously, my professional journey has evolved, and I am currently immersed in mastering backend development, exploring diverse coding languages, and staying abreast of the latest tech trends. Beyond my professional pursuits, I am deeply committed to personal well-being. Regularly practicing yoga and meditation forms an integral part of my routine, allowing me to strike a harmonious balance between my professional and personal endeavors.
          </p>

          
            </div>
            <div className="right-content">
              <img src={process.env.PUBLIC_URL + '/Roopap.jpg'} alt="Your Name" />
            </div>
          </div>
          <div className="resume-button-container">
            <button className="resume-button" onClick={openResume}>Resume</button>
          </div>

          <h3>Education and Achievements</h3>
          <ul>
            <li>Bachelor's Degree in Business - Major in Accounting and Auditing.</li>
            <li>Introduced and assimilated a new software system, leading to a 40% improvement in operational efficiency.</li>
            <li>Boosted client base by 40%, resulting in increased revenue and market presence.</li>
            <li>Choreographed several dances at Swaminarayan Temple, showcasing my creative side.</li>
            <li>
              Completed Software Development Certificate of Completion.
              <a href={process.env.PUBLIC_URL + '/certificates/SoftwareDevelopmentCertificateofCompletion.pdf'} target="_blank" rel="noopener noreferrer">
              Software Development Job Simulation Certificate of Completion.pdf
              </a>
            </li>
            <li>
              Completed Cybersecurity Foundation Course from Coursera Microsoft Online.
              <a href={process.env.PUBLIC_URL + '/certificates/CyberSecurityCertificate.pdf'} target="_blank" rel="noopener noreferrer">
                Cyber Security Certificate.pdf
              </a>
            </li>
            <li>
              Completed Cybersecurity Play It Safe Manage Security Risks from Coursera.
              <a href={process.env.PUBLIC_URL + '/certificates/CyberSecurityPlayItSafeManageSecurityRisks.pdf'} target="_blank" rel="noopener noreferrer">
                Cyber Security Play It Safe Manage Security Risks.pdf
              </a>
            </li>
            <li>
              Achieved Cyber Security Certificate from Datacom.
              <a href={process.env.PUBLIC_URL + '/certificates/CyberSecurityCertificateDatacom.pdf'} target="_blank" rel="noopener noreferrer">
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
