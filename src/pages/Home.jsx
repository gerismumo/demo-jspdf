import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <button
      onClick={() => navigate('/docReport')}
      >DownLoad Report in Doc Design</button>
      <button
      onClick={() => navigate('/htmlReport')}
      >DownLoad Report in Html Design</button>
    </div>
  );
};

export default Home;
