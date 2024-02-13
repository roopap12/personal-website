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
           {showForm && <GetInTouchForm showForm={showForm} handleClose={handleFormClose} />}
    </div>
  );
};

export default GetInTouchPage;