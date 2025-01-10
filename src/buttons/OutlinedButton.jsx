import React from 'react';
import './OutlinedButton.css';

const OutlinedButton = ({ text, onClick }) => {
  return (
    <button className="outlined-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default OutlinedButton;
