import { useState } from 'react';
import '../css/App.css';
import Buttons from './Buttons';
import Display from './Display';

const App = () => {
  const [display, setDisplay] = useState('0');
  
  return (
    <div id="calculator">
      <Display display={display} />
      <Buttons />
      
    </div>
  );
};

export default App;
