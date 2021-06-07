import './App.css';
import { Hooks } from './Components/Hooks';
import { useState, useEffect } from 'react'
import Animations from './Components/Animations';

function App() {

  const [theme, setTheme] = useState(['gold']);

  const lightTheme = () => setTheme('light');
  const darkTheme = () => setTheme('dark');

  const palette = {
    'light': '#e3c4a8',
    'dark': '#4a4a48',
  };

  let bg = '';
  let text = '';

  switch (theme) {
    case 'light':
      bg = palette.light;
      text = palette.dark;
      break;
    case 'dark':
      bg = palette.dark;
      text = palette.light;
      break;
    default:
      bg = theme
  }

  useEffect(() => { document.title = theme }, [theme])

  return (
    <div className='App' style={{ background: `${bg}`, color: `${text}` }} >
      <div className='title' >
        <h2>Current theme: {theme} </h2>
        <div className="btn">
          <button onClick={lightTheme} > light 🌞 </button>
          <button onClick={darkTheme} > dark 🌙 </button>
          <button onClick={() => setTheme('gold')} > reset ✨ </button>
        </div>
      </div>
      <div className='sections' >
        <Hooks max={10} />
        <Animations />
      </div>

    </div>
  );
}

export default App;
