import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import BrandList from './pages/BrandList';
import FamilyList from './pages/FamilyList';
import ModelList from './pages/ModelList';
import WatchDetails from './pages/WatchDetails';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Watch Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/all-brands">All Brands</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-brands" element={<BrandList />} />
          <Route path="/all-family-by/brandname/:brandName" element={< FamilyList />} />
          <Route path="/all-family-by/brandname/:brandName/family/:familyName" element={<ModelList />} />
          <Route path="/watch-media-links-by-id/:watchId" element={<WatchDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
