import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Materiales
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              Proveedores
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Usuarios
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
