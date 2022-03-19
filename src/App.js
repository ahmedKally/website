import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import React from "react";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import NewsListing from './pages/NewsListing/NewsListing';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/news-listing' element={<NewsListing/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
