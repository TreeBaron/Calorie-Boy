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
        <div>
          <div class="container">
            <div class="row">
              <div class="col-sm-2 marginSmall"/>
              <div class="col-sm-4 marginSmall">
                Food
              </div>
              <div class="col-sm-2 marginSmall">
                Calories
              </div>
              <div class="col-sm-2 marginSmall"/>
            </div>
            <div className='row'>
              <div class="col-sm-2 marginSmall"/>
              <input className='col-sm-4 marginSmall' type="text" name="food" onChange={() => {console.log('ravioli')}}/>
              <input className='col-sm-2 marginSmall' type="number" name="calories" onChange={() => {console.log('ravioli')}}/>
              <Button className='col-sm-2 marginSmall addButton btn btn-primary'>Add</Button>
            </div>
            <li>
              <div class="row">
                <div class="col-sm-2 marginSmall"/>
                <div class="col-sm-4 marginSmall item">
                  Food
                </div>
                <div class="col-sm-2 marginSmall item">
                  Calories
                </div>
                <div class="col-sm-2 marginSmall item">
                  Delete
                </div>
              </div>
            </li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
