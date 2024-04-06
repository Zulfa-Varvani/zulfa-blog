import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Kenya from './pages/Kenya';
import NavigationBar from './components/NavigationBar';
import Palestine from './pages/Palestine';
import Egypt from './pages/Egypt';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/zulfa-blog/" element={<Home />} />
        <Route path="/kenya" element={<Kenya />} />
        <Route path="/palestine" element={<Palestine />} />
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;