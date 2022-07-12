import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Start } from './components/start';
import { Main } from './components/main';
import { Result } from './components/result';
import hero from './hero.png';
import arrow from './caret-right-solid.svg'

import karasuno from "./data/karasuno.json";

function App() {
  const [content, setContent] = useState(5);
  const [character, setCharacter] = useState({data: karasuno[0].items});
  const handleSetCharacter = (Char)=>{
    setCharacter(Char);
  }
  return (
    // <>
    // <Main></Main>
    // </>
    <div className="App">

      {/*navbar*/}
      <div className='Navbar'>
        <div className='siteTitle'>
          <div className='title'>Title</div>
        </div>
        <div className='mainActivity'>
          <div className='mainActivityTitle'>GO</div>
        </div>
      </div>

      {/* Body */}
      <div className='bodyElement'>
        <div className='hero'>
          <img className='heroimg' src={hero}></img>
        </div>
      
      </div>
      {content === 0 ? <Start></Start>
        : content === 1 ? <Main setCh={handleSetCharacter}></Main>
          : <Result character={character}></Result>}
    </div>
  );
}

export default App;
