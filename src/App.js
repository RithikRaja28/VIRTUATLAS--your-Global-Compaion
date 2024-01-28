import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import VirtuatlasNavigation from './Components/VirtuatlasNavigation';
import HeroSection from './Components/HeroSection';
import Explore from './Components/Explore';
import Virtuatlasfooter from './Components/Virtuatlasfooter';
import Mapintegrate from './Components/Mapintegrate';
import Multilingual from './Components/Multilingual';
function App() {
  return (
    <div className="App" id="home">
      <header className='VirtuatlasNavigation'>
        <VirtuatlasNavigation />
      </header>
      <section className='HeroSection'>
        <HeroSection/>
      </section>
      <hr className='m-5'/>
      <section className='Explore' style={{marginTop:'50px'}}>
        <Explore/>
      </section>
      <section className='Mapintegrate'>
        <Mapintegrate/>
      </section>
      <section className='Multilingual'>
        <Multilingual/>
      </section>
      <footer className='footer'>
        <Virtuatlasfooter/>
      </footer>
    </div>
  );
}

export default App;
