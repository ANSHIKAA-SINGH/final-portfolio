import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function Home() {
  return (
    <div className="content">
      {/* Wrapper to Center Text */}
      <div className="center-content">
        <h1 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px brown' }}>
          Hello From Anshika!!
        </h1>
        <h2 style={{ color: 'white', textShadow: '2px 2px grey' }}>
          Frontend Developer
        </h2>
        <h3 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px grey' }}>
          Experience in web design
        </h3>
        <h3 style={{ color: 'rgb(136, 80, 6)', textShadow: '2px 2px grey' }}>
          and development knowledge...
        </h3>
        <button
          onClick={() => window.open('/image copy.png', '_blank')}
          style={{
            backgroundColor: 'rgb(136, 80, 6)',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '10%',
            color: 'white',
            borderBlockColor: 'rgb(136, 80, 6)',
          }}
        >
          Open Image
        </button>
      </div>

      {/* Image Positioned on Left Center */}
      <div className="ans">
        <img src="/Anshii.jpeg" alt="Anshika" />
      </div>
    </div>
  );
}

export default Home;
