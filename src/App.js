import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='row' className='flexBox'>
          <h1>
            Calorie-Boy
          </h1>
        </div>
        <div id='row' className='flexBox'>
          <p>
            Your one stop shop for counting calories
            quickly and easily without a bulky app
          </p>
        </div>
        <div id='row' className='flexBox'>
          <input className='addText' type="text" name="food" onChange={() => {console.log('ravioli')}}/>
          <Button className='addButton btn btn-primary '>Add</Button>
        </div>
        <div id='row' className='flexBox'>
          <ul>
            <li>Wow, what a list item :)</li>
            <li>Wow, what a list item :)</li>
            <li>Wow, what a list item :)</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
