import './App.css';
import Row from "./components/Row"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import { categories } from './api';
import { Login } from './components/Login';
import { Register } from './components/Register';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <>
      <Nav />
      <Banner />
      {categories.map((category) => (
        <Row
          key={category.name}
          title={category.title}
          path={category.path}
          isLarge={category.isLarge}
        />
      ))}
    </>
  );
}

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

