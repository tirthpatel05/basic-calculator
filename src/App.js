import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const calculateResult = () => {
        try {
            // Using eval for simplicity, but it's not recommended for production code
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const clearInput = () => {
        setInput('');
    };

    return (
      <div className="calculator-container">
          <input type="text" value={input} readOnly className="calculator-display" />
          <div className="calculator-buttons">
              {'789+456-123*(0)/'.split('').map((char) => (
                  <button key={char} onClick={() => handleButtonClick(char)}>
                      {char}
                  </button>
              ))}
              <button className="special-button" onClick={calculateResult}>=</button>
              <button className="special-button"onClick={clearInput}>C</button>
          </div>
      </div>
    );
}

export default Calculator;
