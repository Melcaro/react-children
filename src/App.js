import React from 'react';
import './App.css';
import { ButtonComponent } from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent>
        <img
          alt="delicious cookies"
          src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </ButtonComponent>
    </div>
  );
}

export default App;
