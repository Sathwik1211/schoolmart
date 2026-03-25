// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Corporate from './pages/Corporate';
import AboutUs from './pages/AboutUs';
import Manufacturing from './pages/Manufacturing';
import Catalogues from './pages/Catalogues';
import Environments from './pages/Environments';
import Guides from './pages/Guides';
import ContactUs from './pages/ContactUs';
import Furniture from './pages/Furniture';
import Architecture from './pages/Architecture';
import DigitalInfra from './pages/DigitalInfra';
import SchoolDesigns from './pages/SchoolDesigns';
import Sports from './pages/Sports';
import Mathematics from './pages/Mathematics';
import Science from './pages/Science';
import LabsLibraries from './pages/LabsLibraries';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/catalogues" element={<Catalogues />} />
            <Route path="/environments" element={<Environments />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/school-building-design" element={<Architecture />} />
            <Route path="/digital" element={<DigitalInfra />} />
            <Route path="/design" element={<SchoolDesigns />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/gamified-math-labs" element={<Mathematics />} />
            <Route path="/science-is-fun" element={<Science />} />
            <Route path="/labs" element={<LabsLibraries />} />
            <Route path="/registration-new-form" element={<Registration />} />
            <Route path="/my-account" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
