import React from "react";
import "./../Styles/Homepage.css";
import ecommerceImage from "../ecommerce.jpg";
import meditationImage from "../meditation-app.jpg";
import exobrainImage from "../exobrain.jpg";
import cybersecurityImage from "../Cybersecurity-HM.jpg";
import ddosImage from "../ddos-project-image.jpg"; // Image for DDoS project
import invoiceImage from "../invoice-project-image.jpg"; // Image for invoice project
import heroVideo from "../hero-video.mp4";
const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        {/* Background Video */}
        <div className="video-container">
          <video autoPlay loop muted className="background-video">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="text-container">
          <p>Hello, I'm Roopa</p>
          <h1>
            I am an experienced and results-driven{" "}
            <strong>Full Stack Developer</strong>.<br />
            <strong>*  Cybersecurity Expert</strong>, and{" "}
            <strong>RPA Specialist</strong> with a passion for building secure,
            scalable, and innovative digital solutions.
            <br />
            *  With a strong foundation in <strong>Automation</strong>,{" "}
            <strong>Backend Development</strong>, and{" "}
            <strong>Cybersecurity</strong>,
            <br />
            *  I craft robust systems that drive operational efficiency, secure
            digital environments, and elevate user experiences.
            <br />
            Let’s collaborate to transform your ideas into high-performance,
            secure, and intelligent solutions.
          </h1>
        </div>
        {/* <div className="image-container">
          <img src="Homepg.jpg" alt="Hero Graphic" />
        </div> */}
      </section>

      {/* Projects Portfolio Section */}
      <section className="portfolio">
        <h2>Projects Portfolio</h2>
        {/* Project Container */}
        <div className="project-container">
          {/* Project Cards-1 */}
          <div className="project">
            <a href="/ecommerce-project" className="project-image">
              <img src={ecommerceImage} alt="Ecommerce Project" />
              <div className="project-overlay"></div>
            </a>
            <p>
              Experience the Future of Online Shopping: Our E-commerce Project,
              meticulously crafted with React and Node.js, redefines the digital
              marketplace. Immerse yourself in a world where browsing, cart
              management, and seamless checkout converge to offer an
              unparalleled shopping journey. Elevate your online retail
              experience with cutting-edge technology and user-friendly design.
            </p>
          </div>
          {/* Project Cards-2 */}
          <div className="project">
            <a href="/meditation-project" className="project-image">
              <img src={meditationImage} alt="Meditation Project" />
              <div className="project-overlay">
                {/* Any overlay content goes here */}
              </div>
            </a>
            <p>
              Embark on a transformative voyage of self-discovery and holistic
              well-being through our Yoga and Meditation App. Immerse yourself
              in the serene realm of mindfulness, harmonizing ancient traditions
              with state-of-the-art technology to cultivate tranquility amid
              life's bustling demands. Elevate your well-being and embrace a
              peaceful lifestyle with our thoughtfully designed application.
            </p>
          </div>
          {/* Project Cards-3 */}
          <div className="project">
            <a href="/exobrain-project" className="project-image">
              <img src={exobrainImage} alt="Exobrain Project" />
              <div className="project-overlay"></div>
            </a>
            <p>
              Revolutionizing Communication: Unleash the Power of Intelligent
              Conversations with Our Advanced Chatbot. Seamlessly Enhancing
              Interactions, Simplifying Processes, and Providing Instant Support
              – Your Virtual Companion for Smarter, Efficient, and More
              Connected Experiences.
            </p>
          </div>
          {/* Project Cards-4 */}
          <div className="project">
            <a href="/cybersecurity-project" className="project-image">
              <img src={cybersecurityImage} alt="Cybersecurity Project" />
              <div className="project-overlay"></div>
            </a>
            <p>
              Empowering Security: Our Cybersecurity Project delivers advanced
              protection for digital assets, bolstering network resilience and
              equipping businesses with state-of-the-art security measures."
              This brief description emphasizes the key goals of your project—to
              enhance security and provide advanced protection for digital
              assets.
            </p>
          </div>

          {/* Project - 5 Automation Project (Invoice Processing) */}
          <div className="project">
            <a href="/invoice-processing-project" className="project-image">
              <img src={invoiceImage} alt="Invoice Processing Project" />
              <div className="project-overlay">
                <span className="overlay-text">
                  RPA UiPath - Invoice Processing Automation
                </span>
              </div>
            </a>
            <p>
              Automating Invoice Data Extraction and Entry This UiPath RPA
              project automates the extraction of key data from PDF invoices,
              validates it, and updates it into Excel or a database. The bot
              performs tasks such as extracting invoice numbers, vendor details,
              amounts, and dates from invoices, eliminating the need for manual
              data entry. The system ensures accuracy by validating the
              extracted data before entering it into business workflows,
              reducing errors and saving time.
            </p>
          </div>
          {/* Project - 6 New Project Card for DDoS Detection System (In Progress) */}
          <div className="project">
            <a href="/ddos-project" className="project-image">
              <img src={ddosImage} alt="DDoS Detection Project" />
            </a>

            {/* In Progress Banner below the image */}
            <div className="in-progress-banner-container">
              <div className="in-progress-banner">In Progress</div>
            </div>

            {/* Short Description Below the Image */}
            <h3 className="ddos-short-description">
              DDoS Detection System: A cutting-edge project focused on detecting
              and mitigating Distributed Denial of Service (DDoS) attacks in
              real-time.
            </h3>

            {/* Main Description */}
            <p>
              This system uses advanced algorithms and AI to monitor network
              traffic and quickly identify suspicious patterns, providing
              businesses with an automated solution to protect their online
              infrastructure. Currently under development with plans for
              deployment soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
