import { Routes, Route } from 'react-router-dom';
import './App.css';
import Meals from './Components/Menu/Meals';
import Navigation from './Header/Navigation';
import Home from './Components/Home/Home';
import PaymentForm from './Header/Payments/paymentForm';

function App() {

  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Menu/*' element={<Meals />}/>
          <Route path='/info' element={<PaymentForm />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;