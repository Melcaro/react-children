import React from 'react';

const ButtonComponent = ({ children }) => (
  <div style={{ overflow: 'hidden', position: 'relative' }}>
    <span className="betaText">BETA</span>
    <button>{children}</button>
  </div>
);

export { ButtonComponent };
