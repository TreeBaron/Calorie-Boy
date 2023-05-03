import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const TopDisplay = ({ totalCalories, goal, setGoal, cookieKey, cookies, items, cookieOptions }) => 
{
  return (
    <div className='container'>
          <div className='row'> 
            <div className='col-sm-4'>
              <h1>Calories</h1>
              <h2>{totalCalories}</h2>
            </div>
            <div className='col-sm-4'/>
            <div className='col-sm-4'>
              <h1>Goal</h1>
              <input className='marginSmall goalNumberWidth' type="number" value={goal} onChange={(event) => {
                let goalValue = parseInt(event.target.value) ? parseInt(event.target.value) : 0;
                setGoal(goalValue);
                cookies.set(cookieKey, {items: [...items], goal: goalValue}, cookieOptions);
                }}/>
            </div>
          </div>
        </div>
  );
};

function App() {

  const [goal, setGoal] = useState(0);
  const [items, setItems] = useState([]);
  const [foodEntry, setFoodEntry] = useState("Bagel");
  const [calorieEntry, setCalorieEntry] = useState(100);
  const [totalCalories, setTotalCalories] = useState(0);

  let cookieExpireDate = new Date();
  let daysTilExpire = 6;
  let result = cookieExpireDate.setDate(cookieExpireDate.getDate() + daysTilExpire);
  let cookieOptions = {path: '/', expires: new Date(result)};

  const countCalories = (newItem) => {
    let total = 0;

    if(newItem)
    {
      total += newItem.calories;
    }
    
    items.forEach(item => {
      total += item.calories;
    });
    setTotalCalories(total);
  };

  const countLoadedItems = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.calories;
    });
    setTotalCalories(total);
  };

  // Load Cookies if found...
  const cookies = new Cookies();
  const cookieKey = 'myCalorieCount';
  let retrieved = cookies.get(cookieKey);

  if(retrieved && (!items || items.length === 0))
  {
    if(retrieved.items.length)
    {
      setItems(retrieved.items);
      countLoadedItems(retrieved.items);
    }

    if(retrieved.goal && goal === 0)
    {
      setGoal(retrieved.goal);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TopDisplay totalCalories={totalCalories} goal={goal} setGoal={setGoal} cookieKey={cookieKey} cookies={cookies} items={items} cookieOptions={cookieOptions}/>
          <div class="container marginTop">
            <div class="row">
              <div class="col-sm-5 marginSmall">
                Food
              </div>
              <div class="col-sm-2 marginSmall">
                Calories
              </div>
              <div class="col-sm-4 marginSmall"/>
            </div>
            <div className='row'>
              <input className='col-sm-5 marginSmall' type="text" value={foodEntry} onChange={(event) => {setFoodEntry(event.target.value); }}/>
              <input className='col-sm-2 marginSmall' type="number" value={calorieEntry} onChange={(event) => {setCalorieEntry(parseInt(event.target.value) ? parseInt(event.target.value) : 0)}}/>
              <Button className='col-sm-4 marginSmall btn btn-primary' onClick={() => {
                let newItem = {food: foodEntry, calories: calorieEntry, id: new Date().getTime()};
                setItems([...items, newItem]);
                setFoodEntry('');
                setCalorieEntry(0);
                countCalories(newItem);
                cookies.set(cookieKey, {items: [...items, newItem], goal: goal}, cookieOptions);
              }}>Add</Button>
            </div>
            {items.map(item => (
              <li>
                <div class="row">
                  <div class="col-sm-4 marginSmall item">
                    {item.food}
                  </div>
                  <div class="col-sm-2 marginSmall item">
                    {item.calories}
                  </div>
                  <Button className='col-sm-2 marginSmall btn btn-danger' onClick={() => {
                    let newItems = [...items.filter(x => x.id !== item.id)];
                    if(!newItems) {
                      newItems = [];
                    }
                    setItems(newItems);
                    countCalories();
                    cookies.set(cookieKey, {items: newItems, goal: goal}, cookieOptions);
                  }}>Delete</Button>
                </div>
              </li>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
