import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

const TopDisplay = ({}) => 
{
  return (
    <div className='container'>
          <div className='row'> 
            <div className='col-sm-4'>
              <h1>Calories</h1>
              <h2>100</h2>
            </div>
            <div className='col-sm-4'>
              <h1>Goal</h1>
              <input className='marginSmall goalNumberWidth' type="number" name="calories" onChange={() => {console.log('ravioli')}}/>
            </div>
          </div>
        </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TopDisplay/>
          <div class="container marginTop">
            <div class="row">
              <div class="col-sm-4 marginSmall">
                Food
              </div>
              <div class="col-sm-2 marginSmall">
                Calories
              </div>
              <div class="col-sm-2 marginSmall"/>
            </div>
            <div className='row'>
              <input className='col-sm-4 marginSmall' type="text" name="food" onChange={() => {console.log('ravioli')}}/>
              <input className='col-sm-2 marginSmall' type="number" name="calories" onChange={() => {console.log('ravioli')}}/>
              <Button className='col-sm-2 marginSmall btn btn-primary'>Add</Button>
            </div>
            <li>
              <div class="row">
                <div class="col-sm-4 marginSmall item">
                  Food
                </div>
                <div class="col-sm-2 marginSmall item">
                  Calories
                </div>
                <Button className='col-sm-2 marginSmall btn btn-danger'>Delete</Button>
              </div>
            </li>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
