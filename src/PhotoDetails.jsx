import React from 'react';

function PhotoDetails({ title, explanation }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{explanation}</p>
    </div>
  );
}

export default PhotoDetails;
