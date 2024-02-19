import React from 'react';
import './../Styles/Homepage.css'; 
import ecommerceImage from '../ecommerce.jpg';
import meditationImage from '../meditation-app.jpg';
import exobrainImage from '../exobrain.jpg';
import cybersecurityImage from '../Cybersecurity-HM.jpg';

const Homepage = () => {
  
  return (
    <div className="homepage">  
      {/* Hero Section */}
      <section className="hero">
      <div className="text-container">
          <p>Hello, I'm Roopa</p>
          <h1>I'm a skilled Full Stack Developer 🧙‍♀️, specializing in Cyber Security and Backend Development. I'm passionate about crafting secure and robust digital solutions. Let's work together to bring your ideas to life with code magic!</h1>
        </div>
        <div className="image-container">
          <img src="Homepg.jpg" alt="Hero Graphic" />
        </div>
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
          <div className="project-overlay">
          </div>
        </a>
        <p>
          Experience the Future of Online Shopping: Our E-commerce Project, meticulously crafted with React and Node.js, redefines the digital marketplace. Immerse yourself in a world where browsing, cart management, and seamless checkout converge to offer an unparalleled shopping journey. Elevate your online retail experience with cutting-edge technology and user-friendly design.
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
    Embark on a transformative voyage of self-discovery and holistic well-being through our Yoga and Meditation App. Immerse yourself in the serene realm of mindfulness, harmonizing ancient traditions with state-of-the-art technology to cultivate tranquility amid life's bustling demands. Elevate your well-being and embrace a peaceful lifestyle with our thoughtfully designed application.
    </p>
  </div>
    {/* Project Cards-3 */}
    <div className="project">
    <a href="/exobrain-project" className="project-image">
    <img src={exobrainImage} alt="Exobrain Project" />
          <div className="project-overlay">
          </div>
        </a>
        <p>
        Revolutionizing Communication: Unleash the Power of Intelligent Conversations with Our Advanced Chatbot. Seamlessly Enhancing Interactions, Simplifying Processes, and Providing Instant Support – Your Virtual Companion for Smarter, Efficient, and More Connected Experiences.
        </p>
  </div>
    {/* Project Cards-4 */}
    <div className="project">
    <a href="/cybersecurity-project" className="project-image">
    <img src={cybersecurityImage} alt="cybersecurity Project" />
          <div className="project-overlay">
          </div>
        </a>
        <p>
        Empowering Security: Our Cybersecurity Project delivers advanced protection for digital assets, bolstering network resilience and equipping businesses with state-of-the-art security measures."

        This brief description emphasizes the key goals of your project—to enhance security and provide advanced protection for digital assets.
        </p>
  </div>
    
</div>
  </section>
</div>
  );
}

export default Homepage;
