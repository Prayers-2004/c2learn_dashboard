import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ClassList from './components/ClassList';
import ClassDetails from './components/ClassDetails';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClassClick = (classInfo) => {
    setSelectedClass(classInfo);
  };

  const closeClassDetails = () => {
    setSelectedClass(null);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="app">
      <div className="background">
        <Navbar />
        <div className="content">
          <h1 className="dashboard-title">Welcome to the Kids' Study Dashboard!</h1>
          <ClassList onClassClick={handleClassClick} />
          {selectedClass && (
            <ClassDetails classInfo={selectedClass} onClose={closeClassDetails} />
          )}
          {isModalOpen && <Modal onClose={toggleModal} />}
        </div>
        <button className="upgrade-btn" onClick={toggleModal}>
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default App;
