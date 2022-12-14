import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './pages/SignUp'
import Contacts from './pages/Contacts'


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Contacts />} />
        <Route
          path="*"
          element={<div>Error</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
