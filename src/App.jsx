
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Client from './components/Client';
import Community from './components/Community';

function App() {

  return (
    <div  className='max-w-7xl mx-auto bg-white'>
      
      <Header/>
      <Hero/>
      <Client/>
      <Community/>
    </div>
  )
}

export default App
