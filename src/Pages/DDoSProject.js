import React, { useEffect } from "react";
import "../Styles/DDoSProject.css"; // Import custom styles for the DDoS project

const DDoSProject = () => {
    useEffect(() => {
      // Ensure that autoplay and mute work by setting the YouTube iframe URL correctly
      const iframe = document.getElementById("ddos-video"); // Get the iframe element
      iframe.src += "&autoplay=1&mute=1"; // Append autoplay and mute parameters to the src URL
    }, []);
  
    return (
      <div className="ddos-page-container">
        {/* Video Section */}
        <div className="video-container">
          <iframe
            id="ddos-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/c1nWg2T6NsA?rel=0"  // Embed the video (autoplay and mute will be added dynamically)
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      {/* In Progress Banner Section */}
      <div className="in-progress-banner-container">
        <div className="in-progress-banner">In Progress</div>
      </div>

      {/* Description Section */}
      <div className="description-container">
        <h2 className="ddos-heading">AI Powered DDoS Detection System: Real-Time Attack Mitigation</h2>
        <p className="ddos-description">
          <strong>Overview:</strong> The **AI-Powered DDoS Detection System** is transforming the landscape of network protection by providing **real-time** mitigation of **Distributed Denial of Service (DDoS)** attacks. Powered by **cutting-edge AI** and **machine learning algorithms**, this system is capable of detecting and mitigating attacks before they can cause significant disruption. The system’s **self-learning nature** allows it to continually improve its detection accuracy, adapting to new types of threats as they evolve.
        </p>

        {/* Action Section */}
        <div className="ddos-action">
          <p className="ddos-task-heading">
            <strong>Core Actions:</strong><br />
            <em>Building the Smart Defense Mechanism</em><br />
            The DDoS Detection System operates on a series of core actions that work in tandem to ensure maximum protection for networks.
          </p>
          
          <ul className="ddos-action-list">
            <li className="ddos-action-item">
              <strong>Data Collection – The Foundation of Smart Detection</strong><br />
              Every successful AI system begins with data. Our AI-powered detection model meticulously gathers massive amounts of network traffic data to create a rich dataset. This data acts as the fuel for the machine learning algorithms, allowing the system to learn from the past and predict future attacks with high accuracy. The system continuously refines its understanding of traffic patterns, enabling it to identify abnormal behaviors with increasing precision over time.
            </li>

            <li className="ddos-action-item">
              <strong>Model Training – Teaching the System to Think Like a Human</strong><br />
              Using advanced machine learning techniques, we train the system to recognize attack patterns in real time. Through supervised learning, the system continuously refines its detection capabilities, becoming smarter and more efficient with each attack scenario it encounters. As the system learns, it grows increasingly adept at distinguishing between normal traffic and malicious patterns, even in highly complex scenarios.
            </li>

            <li className="ddos-action-item">
              <strong>Real-Time Monitoring – Always Vigilant, Always On</strong><br />
              Our DDoS Detection System operates 24/7, analyzing network traffic in real-time to detect abnormal behaviors. Whether it’s a small-scale attack or a large-scale DDoS flood, the AI detects the threat, assesses its severity, and activates defensive protocols within milliseconds. Its proactive approach ensures that no attack goes unnoticed, preventing any potential damage to critical systems.
            </li>

            <li className="ddos-action-item">
              <strong>Automated Response – Instant Mitigation with Zero Human Intervention</strong><br />
              In the world of cyber threats, speed is critical. Once a threat is identified, the automated response system springs into action. Malicious traffic is immediately blocked, and alerts are sent to administrators, empowering them to take action without delay. This system eliminates the need for manual intervention, ensuring that attacks are dealt with swiftly and without human error. This level of automation ensures that the response time is optimized, reducing the chances of a successful attack.
            </li>
          </ul>
        </div>

        <p className="ddos-description">
          <strong>Next Steps:</strong> After the detection model is fully trained and integrated, the system will be deployed in production environments across various infrastructures. The system is designed to provide **continuous protection** against DDoS attacks, ensuring businesses have a **robust defense mechanism** that adapts to evolving threats. With **real-time monitoring** and **automated mitigation**, this AI-driven system provides peace of mind and guarantees a scalable, efficient defense solution.
        </p>

        <p className="ddos-description">
          The next phase will involve scaling the system for deployment in various environments. Once fully integrated, the DDoS Detection System will provide unparalleled protection, continuously adapting to new attack strategies and keeping businesses safe from the ever-growing cyber threats.
        </p>
      </div>
    </div>
  );
};

export default DDoSProject;
