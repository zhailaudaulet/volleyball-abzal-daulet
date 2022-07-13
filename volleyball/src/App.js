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

  const [content, setContent] = useState(0);
  const [dataUser, setDataUser] = useState([]);
  const [character, setCharacter] = useState({ data: karasuno[0].items });
  const handleSetCharacter = (Char) => {
    setCharacter(Char);
  }
  // const blurBackground = ()=>{
  //   document.getElementById('myHero').style.filter.blurBackground
  // }
  // const handleMove = e => {
  //   console.log(e.layerX,);
  // }
  // document.onmousemove = e => handleMove(e);

  return (

    // <>
    // <Main></Main>
    // </>
    <div className="App">

      {/*navbar*/}
      <div className='Navbar'>
        <div className='siteTitle' onClick={() => { setContent(0) }}>
          <div className='title'>Home</div>
        </div>
        <div className='mainActivity' onClick={() => {setContent(1)}}>
          <div className='mainActivityTitle' >GO</div>
        </div>
      </div>


      {/* Body */}
      <div id='myHero' className='bodyElement'>
        <div className='hero'>
          <img className='heroimg' src={hero}></img>
        </div>
        <div className='rightArrow'>
          <img src={arrow} className='rightArrowSVG'></img>
        </div>
        <div className='leftArrow'>
          <img src={arrow} className='leftArrowSVG'></img>
        </div>


      </div>
      {content === 0 ? <Start setContent={setContent}></Start>
        : content === 1 ? <Main setCh={handleSetCharacter} setContent={setContent} setDataUser={setDataUser}></Main>
          : <Result character={character} dataUser={dataUser}></Result>}
    </div>
  );
}

export default App;
