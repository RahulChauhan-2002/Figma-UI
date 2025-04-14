
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Client from './components/Client';
import Community from './components/Community';
import Community1 from './components/Community1';
import Design from './components/Design';

function App() {

  return (
    <div  className='max-w-7xl mx-auto bg-white'>
      
      <Header/>
      <Hero/>
      <Client/>
      <Community/>
      <Community1/>
      <Design/>
    </div>
  )
}

export default App
