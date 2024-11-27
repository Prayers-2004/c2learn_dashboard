import React from 'react';
import './ClassList.css';

const classes = [
  {
    id: 1,
    name: 'Math Magic',
    description: 'Learn numbers and shapes with fun activities.',
    time: '9:00 AM - 10:00 AM',
    image: '/images/math.png',
  },
  {
    id: 2,
    name: 'Science Explorers',
    description: 'Explore the wonders of nature and experiments.',
    time: '10:15 AM - 11:15 AM',
    image: '/images/science.png',
  },
  {
    id: 3,
    name: 'Art Adventures',
    description: 'Unleash creativity with painting and drawing.',
    time: '11:30 AM - 12:30 PM',
    image: '/images/art.png',
  },
  {
    id: 4,
    name: 'Language Learning',
    description: 'Improve reading and speaking skills.',
    time: '1:30 PM - 2:30 PM',
    image: '/images/language.png',
  },
];

const ClassList = ({ onClassClick }) => {
  return (
    <div className="class-list">
      {classes.map((classInfo) => (
        <div
          key={classInfo.id}
          className="class-item"
          onClick={() => onClassClick(classInfo)}
        >
          <img src={classInfo.image} alt={classInfo.name} className="class-image" />
          <h3>{classInfo.name}</h3>
          <p>{classInfo.description}</p>
          <p className="class-time">{classInfo.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassList;
