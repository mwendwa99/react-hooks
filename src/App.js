import './App.css';
import { Hooks } from './Components/Hooks';
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState(['']);

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
      bg = 'green'
  }

  return (
    <div className='App' style={{ background: `${bg}`, color: `${text}` }} >
      <h2>Current theme: {theme} </h2>
      <div className="btn">
        <button onClick={lightTheme} > light 🌞 </button>
        <button onClick={darkTheme} > dark 🌙 </button>
      </div>
      <Hooks max={10} />

    </div>
  );
}

export default App;
