import React from 'react';
import bodyImage from '../../../../../assets/image.png'; // Adjust path as needed

function AnatomySection() {
  return (
    <div className="w-full flex justify-center items-center mb-10 ">
      <img
        src={bodyImage}
        alt="body"
        className="w-full max-w-lg object-contain"
        style={{ transform: 'scale(1.5)', transition: 'transform 0.3s ease' }}
      />
    </div>
  );
}

export default AnatomySection;
