import { useState, useEffect } from "react";

const App = () => {
  const [gameValue, setGameValue] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const choices = ['rock','paper','scissors']

  const [counter, setCounter] = useState(5);

  const handleClick = (value) => {
    setUserChoice(value)
    getCPU()
  }

  const getCPU = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
    compareScore()
  }

  const compareScore = () => {
    console.log(result)
    if(result === 'YOU WIN!'){
        setUserScore(userScore + 1);
        console.log(userScore)
    }
    else if(result === 'YOU LOSE!'){
        setComputerScore(computerScore + 1)
    }
  }

  const startGame = () => {
    // counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    setCounter(5)
    setGameValue(!gameValue)
  }

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  },[counter])

  useEffect(() => {
    {
      switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
          setResult('YOU WIN!')
          break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
          setResult('YOU LOSE!')
          break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
          setResult('ITS A DRAW!')
          break
      }
    }
  }, [computerChoice, userChoice])

  return (
    
    <div>
        <button onClick={() => startGame()}>Start</button>
      <h1>Your choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => 
        <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
          )}
      <h1>Result: {result}</h1>

      <h1> Your Score: {userScore}</h1>
      <h1> Computer Score: {computerScore}</h1>

      
        <div>Countdown: {counter}</div>
      
    </div>
  );
}

export default App;
