import React from 'react';
import './ClassDetails.css';

const ClassDetails = ({ classInfo, onClose }) => {
  return (
    <div className="class-details">
      <h2>{classInfo.name}</h2>
      <img src={classInfo.image} alt={classInfo.name} className="class-details-image" />
      <p>{classInfo.description}</p>
      <p><strong>Time:</strong> {classInfo.time}</p>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default ClassDetails;
