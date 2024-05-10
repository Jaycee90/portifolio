import React, { useState } from 'react';
import '../mycss/Info.css';
import Footer from './Footer';

// Import images for each album
import graduation1 from '../assets/gradImage.jpg';
import graduation2 from '../assets/gradJay.JPG';
import celebration1 from '../assets/gradJay2.JPG';
import celebration2 from '../assets/home.jpg';
import outgoing1 from '../assets/JayCeleb.JPG';
import outgoing2 from '../assets/JayCeleb2.JPG';

function Info() {
  // Define album data
  const albums = [
    {
      name: 'Graduation Pictures',
      images: [graduation1, graduation2],
    },
    {
      name: 'Celebration Moments',
      images: [celebration1, celebration2],
    },
    {
      name: 'Outgoing Pictures',
      images: [outgoing1, outgoing2],
    },
  ];

  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === albums[currentAlbumIndex].images.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? albums[currentAlbumIndex].images.length - 1
        : prevIndex - 1
    );
  };

  const switchAlbum = (index) => {
    setCurrentAlbumIndex(index);
    setCurrentImageIndex(0);
  };

  return (
    <div>
      <div className="info-container">
        <div className="albums">
          <h2>Albums</h2>
          <div className="album-list">
            {albums.map((album, index) => (
              <button className="button" key={index} onClick={() => switchAlbum(index)}>
                {album.name}
              </button>
            ))}
          </div>
        </div>
        <div className="images">
          <h2>{albums[currentAlbumIndex].name}</h2>
          <div className="image-wrapper">
            <img
              src={albums[currentAlbumIndex].images[currentImageIndex]}
              alt={albums[currentAlbumIndex].name}
            />
            <div className="image-navigation">
              <button className='button' onClick={goToPreviousImage}>Previous</button>
              <button className="button" onClick={goToNextImage}>Next</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );  
}

export default Info;