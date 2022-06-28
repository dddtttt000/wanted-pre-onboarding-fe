import React, { useRef, useState, useContext } from 'react';
import { AppContext } from '../src/data/AppContext';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/" element={isLoggedIn ? <Main /> : <Login />} />
    </Routes>
  );
}

export default App;
