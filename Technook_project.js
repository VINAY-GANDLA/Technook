import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './project1.css';

const App = () => {
  const [isWhiteSection, setIsWhiteSection] = useState(true);

  const handleClick = () => {
    setIsWhiteSection(!isWhiteSection);
  };

  return (
    <div className={`section ${isWhiteSection ? 'white-section' : 'black-section'}`}>
      <button onClick={handleClick}>Toggle Section</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
