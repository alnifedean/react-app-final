import { Routes, Route } from 'react-router-dom';
import './App.css';
import Meals from './Components/Menu/Meals';
import Navigation from './Header/Navigation';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Menu/*' element={<Meals />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;