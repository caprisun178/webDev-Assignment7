import { useState, useEffect } from 'react'
import PlayerThrow from './components/PlayerThrow'
import ComputerThrow from './components/ComputerThrow'
import ResultDisplay from './components/ResultDisplay'
import ScoreBoard from './components/ScoreBoard'
import ResetButton from './components/ResetButton'

function App() {
  const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const [result, setResult] = useState('')
  const [isShuffling, setIsShuffling] = useState(false)
  const [displayedComputerImage, setDisplayedComputerImage] = useState('question-mark')

  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0
  })

  const throws = ['rock', 'paper', 'scissors']

  function determineWinner(player, computer) {
    if (player === computer) {
      return 'It is a tie!'
    }

    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!'
    }

    return 'You lose!'
  }

  function updateScore(gameResult) {
    if (gameResult === 'You win!') {
      setScore((prevScore) => ({
        ...prevScore,
        wins: prevScore.wins + 1
      }))
    } else if (gameResult === 'You lose!') {
      setScore((prevScore) => ({
        ...prevScore,
        losses: prevScore.losses + 1
      }))
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        ties: prevScore.ties + 1
      }))
    }
  }

  function handlePlayerChoice(choice) {
    if (isShuffling) {
      return
    }

    setPlayerChoice(choice)
    setComputerChoice('')
    setResult('')
    setIsShuffling(true)
  }

  useEffect(() => {
    if (!isShuffling) {
      return
    }

    let shuffleIndex = 0

    const shuffleInterval = setInterval(() => {
      setDisplayedComputerImage(throws[shuffleIndex % throws.length])
      shuffleIndex++
    }, 500)

    const finishShuffle = setTimeout(() => {
      clearInterval(shuffleInterval)

      const randomChoice = throws[Math.floor(Math.random() * throws.length)]
      setComputerChoice(randomChoice)
      setDisplayedComputerImage(randomChoice)

      const gameResult = determineWinner(playerChoice, randomChoice)
      setResult(gameResult)
      updateScore(gameResult)

      setIsShuffling(false)
    }, 3000)

    return () => {
      clearInterval(shuffleInterval)
      clearTimeout(finishShuffle)
    }
  }, [isShuffling, playerChoice])

  function resetGame() {
    setPlayerChoice('')
    setComputerChoice('')
    setResult('')
    setIsShuffling(false)
    setDisplayedComputerImage('question-mark')
    setScore({
      wins: 0,
      losses: 0,
      ties: 0
    })
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>Rock, Paper, Scissors</h1>
        <p>Pick your throw and play against the computer.</p>
      </header>

      <section className="game-layout">
        <PlayerThrow
          playerChoice={playerChoice}
          onSelectThrow={handlePlayerChoice}
          disabled={isShuffling}
        />

        <ComputerThrow
          displayedComputerImage={displayedComputerImage}
          isShuffling={isShuffling}
        />

        <ResultDisplay
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
        />
      </section>

      <section className="extras">
        <ScoreBoard score={score} />
        <ResetButton onReset={resetGame} />
      </section>
    </main>
  )
}

export default App