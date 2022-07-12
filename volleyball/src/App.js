import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Start } from './components/start';
import { Main } from './components/main';
import { Result } from './components/result';

function App() {
  const [content, setContent] = useState(0);
  return (
    <div className="App">
      {content === 0 ? <Start></Start>
        : content === 1 ? <Main></Main>
          : <Result></Result>}
    </div>
  );
}

export default App;
