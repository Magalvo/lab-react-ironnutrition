import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodCard from './components/FoodCard';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);

  const addFoodHandler = (newFood) => {
    setFoods((previousFoodList) => [...previousFoodList, newFood]);
  };

  const searchHandler = (searchedValue) => {
    const foodsCopy = [...foodsData];
    const filteredFoods = foodsCopy.filter((food) => {
      if (food.name.toLowerCase().includes(searchedValue.toLowerCase())) {
        return food;
      }
    });
    setFoods(filteredFoods);
  };

  return (
    <div className="App" style={{ backgroundColor: '#ffded1' }}>
      <div style={{ margin: '0px 500px' }}>
        <AddFoodForm addNewFood={addFoodHandler} />

        <Search filteredFoods={searchHandler} />
      </div>

      <Divider>
        <b>Food List</b>
      </Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodCard key={food.name + food.image} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
