import './App.css';
import Meals from './Components/Meals';
import Cart from './Header/CartComponents/Cart';

function App() {

  return (
    <div className="App">
      <div className='title-cart'>
        <h1>Platillos</h1>
        <Cart />
      </div>
      <Meals />
    </div>
  );
}

export default App;
