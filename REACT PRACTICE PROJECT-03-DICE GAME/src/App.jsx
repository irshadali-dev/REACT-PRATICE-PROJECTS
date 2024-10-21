import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const togglePlayGame = () => {
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame
        toggle={togglePlayGame} />}
    </>
  )
}

export default App
