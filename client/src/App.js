import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MiddleSection from './components/MiddleSection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Info from './components/Info';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import './mycss/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <MiddleSection />
            <Footer />
          </>} />
          <Route path="/about" element={<About />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/info" element={<Info />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

