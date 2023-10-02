import React from 'react';

function Image({ url, title }) {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
}

export default Image;
