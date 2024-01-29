import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeBackgroundColor = (bgColor) => {
    document.documentElement.style.setProperty('--bg-color', bgColor);
    setBackgroundColor(backgroundColor);
  }

  useEffect(() => {
    changeBackgroundColor('orange');
  }, [])

  return (
    <div className='panel'>
      <button onClick={() => changeBackgroundColor('red')}>Red</button>
      <button onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
      <button onClick={() => changeBackgroundColor('black')}>Black</button>
      <button onClick={() => changeBackgroundColor('purple')}>Purple</button>
      <button onClick={() => changeBackgroundColor('green')}>Green</button>
      <button onClick={() => changeBackgroundColor('blue')}>Blue</button>
      <button onClick={() => changeBackgroundColor('orange')}>Default</button>
    </div>
  )
}

export default App
