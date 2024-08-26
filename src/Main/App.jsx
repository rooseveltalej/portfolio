import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
// import Footer from '../components/Footer'; hace falta modificar el footer
import './css/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </Router>
  );
}

export default App;
