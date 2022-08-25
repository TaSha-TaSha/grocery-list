import './App.css';
import PhotoOne from './shopping.jpeg';
import PhotoTwo from './man.jpeg';
import { GroceryList } from './GroceryList';




function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={PhotoOne} alt='shopping' width='150px' />
      </div>
      <div className='container'>
        <h1>Grocery List</h1>
      </div>
      <div>
        <GroceryList />
      </div>
      <div className='container'>
        <img src={PhotoTwo} alt='a man' width='150px' />
      </div>
    </div>
  );
}

export default App;
