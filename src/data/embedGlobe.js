import React from 'react';

function EmbedGlobe() {
  return (
    <div className="embedGlobe">
        <iframe
        src="https://gifer.com/embed/gzZ"
        width="500"
        height="500"
        style={{ pointerEvents: 'none' }}
        frameBorder="0"
        allowFullScreen
        title="GIF"
        />
    </div>
  );
}

export default EmbedGlobe;
