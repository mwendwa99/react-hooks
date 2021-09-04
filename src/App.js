import './App.css';
import { Hooks } from './Components/Hooks';
import Animations from './Components/Animations';
import { ThemeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkTheme;

  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: 'light' })
    } else {
      theme.dispatch({ type: 'dark' })
    }
    console.log('theme toggled!')
  }

  const appTheme = {
    display: 'flex',
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: "center",
    background: `${darkMode ? '#3A3B3C' : 'white'}`,
    color: `${darkMode ? 'white' : 'black'}`,
    height: '100vh',
    width: '100vw',
  }

  return (
    <div style={appTheme} >
      <button onClick={toggleTheme} > current theme: {darkMode ? '🌙' : '🌞'} </button>
      <Hooks max={10} />
      <Animations />

    </div>
  );
}

export default App;
