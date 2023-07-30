import { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Navbar/Nav';
import Header from './Components/Header/Header';
import Rooms from './Components/Rooms/Rooms';
import Needs from './Components/Needs/Needs';
import Realize from './Components/Realize/Realize';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';


function App() {
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);


  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }

  }, [darkMode]);


  return (
    <div className="App">
      <Nav />
      <Header />
      <Rooms />
      <Needs />
      <Realize />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
