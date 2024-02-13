import React, { useState } from 'react';
import GetInTouchForm from '../Components/GetInTouchForm';

const GetInTouchPage = () => {
  const [showForm, setShowForm] = useState(true);



  const handleFormClose = () => {
    console.log('Closing form');
    setShowForm(false);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      {/* <h2 style={{ color: 'black' }}>Get in Touch</h2>
      <p>Feel free to contact me using the form below:</p> */}
      
      {/* <button onClick={handleFormOpen} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '15px 30px', fontSize: 16, border: 'none', cursor: 'pointer', borderRadius: 5 }}>Hire Me</button> */}

      {showForm && <GetInTouchForm showForm={showForm} handleClose={handleFormClose} />}
    </div>
  );
};

export default GetInTouchPage;