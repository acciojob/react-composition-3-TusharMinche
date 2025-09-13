import React, { useState } from 'react';
import './../styles/App.css';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
      <div 
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {visible && <div className="tooltiptext">{text}</div>}
        {children} 
      </div>
  );
};

export default Tooltip;