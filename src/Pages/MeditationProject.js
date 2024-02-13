// src/Pages/EcommerceProjectPage.js
import React from 'react';
import meditationVideo from '../Meditation-video.mp4';
import '../Styles/MeditationProject.css';



const MeditationProject = () => {
  return (
    <div className="meditation-page-container">
      {/* Video Section */}
      <div className="video-container">
      <video width="560" height="315" controls>
      <source src={meditationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

     {/* Description Section */}
<div className="description-container">
  <h2 className="star-model-heading">Harmonizing Minds: Integrating Chatbot Serenity</h2>
  <p className="star-model-description">
    <strong>Situation:</strong> In the serene realm of our Meditation and Yoga platform, fostering a seamless connection between users and a soothing chatbot became a mindful necessity. The challenge lay in integrating the tranquility of a Python-powered chatbot, orchestrated with the serene backend of FastAPI, into the heart of our React application using Dexie DB.
  </p>
  <p className="star-model-description">
    <strong>Task:</strong> My task involved harmonizing the divergent worlds of React and Python, ensuring users could effortlessly engage in mindful conversations about Yoga and Meditation. Simultaneously, I envisioned creating a serene space where users could access specific Yoga asanas tailored to their needs and immerse themselves in tranquil meditation music.
  </p>

  {/* Action Section */}
  <div className="star-model-action">
    <p className="star-model-task-heading"><strong>Action:</strong> Bridging React with Python Serenity</p>
    <ul className="star-model-action-list">
      <li className="star-model-action-item">
        <strong>Action 1:</strong> Python React Synchronization - Seamlessly orchestrated the Python-powered chatbot with React, ensuring a serene dialogue between users and the AI companion.
      </li>
      <li className="star-model-action-item">
        <strong>Action 2:</strong> FastAPI Connection - Established a smooth connection with FastAPI, allowing for swift communication between the React frontend and the Python backend, promoting a serene user experience.
      </li>
      <li className="star-model-action-item">
        <strong>Action 3:</strong> Dexie DB Integration - Integrated Dexie DB to manage local storage efficiently, fostering a serene environment for storing and retrieving user preferences, chat history, and personalized recommendations.
      </li>
      <li className="star-model-action-item">
        <strong>Action 4:</strong> Mindful Content Delivery - Enriched the platform by offering users specific Yoga asanas curated to their needs and a blissful selection of meditation music, promoting a harmonious journey towards well-being.
      </li>
    </ul>
  </div>

  <p className="star-model-description">
    <strong>Result:</strong> The culmination of these actions resulted in a Meditation and Yoga platform where users seamlessly interact with a soothing chatbot, explore tailored Yoga practices, and immerse themselves in calming meditation music. The project radiates tranquility, fostering a serene haven for mindfulness and well-being.
  </p>
</div>
</div>
  );
};

export default MeditationProject;
