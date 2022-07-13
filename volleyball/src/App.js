import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Start } from './components/start';
import { Main } from './components/main';
import { Result } from './components/result';
import { Comparation } from './components/comparation';
import { Result2 } from './components/result2';
import hero from './hero.png';
import arrow from './caret-right-solid.svg'

import karasuno from "./data/karasuno.json";


function App() {

  const [content, setContent] = useState(5);
  const [dataUser, setDataUser] = useState([]);
  const [character, setCharacter] = useState({ data: karasuno[0].items });
  const handleSetCharacter = (Char) => {
    setCharacter(Char);
  }
  const blurBackground = ()=>{
    document.getElementById('myHero').style.setProperty('filter','blur(4px)',);
  }
  const undoBlurBackground=() =>{
    document.getElementById('myHero').style.removeProperty('filter');
  }
  const giveInfo = ()=>{
    alert('Here we can help you to find who do you look like by using your photo!')
  }
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
        <div className='siteTitle' onClick={() => { setContent(0); undoBlurBackground() }}>
          <div className='title'>Home</div>
        </div>
        <div className='mainActivity' onClick={() => {setContent(1); blurBackground()}}>
          <div className='mainActivityTitle' >GO</div>
        </div>
        <div className='secondaryActivity' onClick={()=>{setContent(3);giveInfo(); blurBackground()}}>
          <div className='mainActivityTitle'>Photo</div>
        </div>
      </div>


      {/* Body */}
        <div className='hero'>
      <div id='myHero' className='bodyElement'>
          <img className='heroimg' src={hero}></img>
        </div>
        {/* <div className='rightArrow'>
          <img src={arrow} className='rightArrowSVG'></img>
        </div>
        <div className='leftArrow'>
          <img src={arrow} className='leftArrowSVG'></img>
        </div> */}


      </div>
      {content === 0 ? <Start setContent={setContent} blurBackground={blurBackground}></Start>
        : content === 1 ? <Main setCh={handleSetCharacter} setContent={setContent} setDataUser={setDataUser} ></Main>
          : content===2 ? <Result character={character} dataUser={dataUser}></Result>:
          content==3?<Comparation setContent={setContent} />:<Result2 character={character}/>}
    </div>
  );

}
export default App;
