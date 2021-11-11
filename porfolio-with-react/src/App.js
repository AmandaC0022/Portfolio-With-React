import React from 'react'; 
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import AboutMe from './components/AboutMe'; 
import Services from './components/Services';
import Sparkle from 'react-sparkle';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe'; 
import Resume from './components/Resume';
import Footer from './components/Footer'; 

function App() {

  return (
    <div style={{ position: 'relative' }}>
      <Sparkle />
      <Navbar />
      <Home />
      <AboutMe />
      <Services />
      <Portfolio />
      <Resume />
      <ContactMe /> 
      <Footer /> 
    </div>
  );
}

export default App;
