import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
// import Footer from '../components/Footer'; hace falta modificar el footer
import './css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
    </Router>
  );
}

export default App;
