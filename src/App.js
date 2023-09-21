// import { Navbar } from 'react-bootstrap';
// import { AppNavbar } from './Components/AppNavbar';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import AppNavbar from './Components/AppNavbar';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='Products' element={<Products />} />
        <Route path='Cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
