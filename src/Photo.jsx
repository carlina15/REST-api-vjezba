import React from 'react';

function Photo({ url, title }) {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
}

export default Photo;
