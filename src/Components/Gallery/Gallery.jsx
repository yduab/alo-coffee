import React, { useState } from 'react';
import './Gallery.css';
import gallery_1 from '../../assets/20.jpg';
import gallery_2 from '../../assets/gallery2.JPG';
import gallery_3 from '../../assets/52.jpeg';
import gallery_4 from '../../assets/3.jpg';
import gallery_5 from '../../assets/14.jpg';
import gallery_6 from '../../assets/7.jpg'; 
import gallery_7 from '../../assets/26.jpg';
import gallery_8 from '../../assets/3.jpg';
import gallery_9 from '../../assets/49.jpg';
import gallery_10 from '../../assets/35.jpg';
import gallery_11 from '../../assets/16.jpg';
import gallery_12 from '../../assets/10.jpg'; 

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="gallery">
      <div className="galleries">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>

      {/* "See More Here" button */}
      <button className="btn1" onClick={openModal}>
        See More 
      </button>

      {/* Modal for additional photos */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-gallery">
              <img src={gallery_5} alt="Gallery 5" />
              <img src={gallery_6} alt="Gallery 6" />
              <img src={gallery_7} alt="Gallery 7" />
              <img src={gallery_8} alt="Gallery 8" />
              <img src={gallery_9} alt="Gallery 9" />
              <img src={gallery_10} alt="Gallery 10" />
              <img src={gallery_11} alt="Gallery 11" />
              <img src={gallery_12} alt="Gallery 12" />
              
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
