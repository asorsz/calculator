import { useEffect, useState } from 'react';
import '../css/App.css';
import Buttons from './Buttons';
import Display from './Display';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [previousButtonID, setPreviousButtonID] = useState('')
  const [previousButtonType, setPreviousButtonType] = useState('');
  const [x, setX] = useState(0);
  const [op, setOp] = useState('');
  const [y, setY] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (!op) setX(parseFloat(display));
    if (op && previousButtonType !== 'equals') {
      setY(parseFloat(display));
    }
  }, [op, display, previousButtonType])

  useEffect(() => {
    if (op === 'add') setResult(x + y);
    if (op === 'subtract') setResult(x - y);
    if (op === 'multiply') setResult(x * y);
    if (op === 'divide')  setResult(x / y);
  }, [x, op, y])
  
  const handleButtonPress = (e) => {
    const buttonID = e.target.id;
    const buttonText = e.target.textContent;
    const buttonType = e.target.dataset.type;
    
    if (previousButtonType === 'operator') {
      document.getElementById(previousButtonID).classList.remove('depressed');
    }

    if (buttonType === 'number') {
      if (
        display === '0' ||
        previousButtonType === 'equals' ||
        (previousButtonType === 'operator' && display !== '-')
      ) {
        setDisplay(buttonText);
      } else {
        setDisplay(display + buttonText);
      }
    }

    if (buttonType === 'decimal') {
      if (!display.includes('.')) {
        setDisplay(display + buttonText);
      }
      if (
        previousButtonType === 'operator' ||
        previousButtonType === 'equals'
      ) {
        setDisplay('0.');
      }
    }     

    if (buttonType === 'operator') {
      if (
        op &&
        previousButtonType !== 'operator' &&
        previousButtonType !== 'equals'
      ) {
        setDisplay(result.toString());
        setX(result);
      }      
      if (
        buttonID === 'subtract' &&
        previousButtonType === 'operator'
      ) {
        setDisplay('-');
      } else if (display === '-') {
        setDisplay(x);
        setOp(buttonID);
      } else {
        setOp(buttonID);
      }
      e.target.classList.add('depressed');
    }

    if (buttonType === 'equals') {
      setDisplay(result.toString());
      setX(result);
    }
    
    if (buttonType === 'clear') {
      setX(0);
      setY(0);
      setOp('');
      setResult(0);
      setDisplay('0');
    }

    setPreviousButtonID(buttonID);
    setPreviousButtonType(buttonType);
  }

  return (
    <div id="calculator">
      <Display display={display} />
      <Buttons handleButtonPress={handleButtonPress} />
      
    </div>
  );
};

export default App;
