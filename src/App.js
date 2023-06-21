import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink exact to="/React-Task-6/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/React-Task-6/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/React-Task-6/projects" activeClassName="active">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/React-Task-6/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/React-Task-6/" element={<Home />} />
          <Route path="/React-Task-6/about" element={<About />} />
          <Route path="/React-Task-6/projects" element={<Projects />} />
          <Route path="/React-Task-6/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
