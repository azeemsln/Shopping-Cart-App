import React from 'react';
import { Routes,Route } from'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';

const App=()=> {
  return (
    <div>
        

          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
    </div>
  );
}

export default App;
