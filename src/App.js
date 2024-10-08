import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { makeGuess, restartGame } from './store/actions';
import HangmanGraphics from './HangmanGraphics';
import Help from './components/Help'; 
import Clues from './components/Clues';
import './graphics/App.css';

function App() {
  // Redux state and dispatch setup
  const word = useSelector((state) => state.word);
  const guessedLetters = useSelector((state) => state.guessedLetters);
  const chances = useSelector((state) => state.chances);
  const dispatch = useDispatch();
  const isGameOver = useSelector((state) => state.isGameOver);

  // Countdown timer state
  const [secondsLeft, setSecondsLeft] = useState(60); // Set the initial countdown time

  // Handler for keyboard input
  const handleKeyPress = (event) => {
    const keyPressed = event.key.toUpperCase();
    if (/^[A-Z]$/.test(keyPressed) && chances > 0 && !guessedLetters.includes(keyPressed) && !isGameOver) {
      dispatch(makeGuess(keyPressed));
    }
  };

  // Set up keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

 // Countdown effect
useEffect(() => {
  const countdownInterval = setInterval(() => {
    setSecondsLeft((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
  }, 1000);

  // Cleanup interval on component unmount or when the countdown reaches 0
  return () => {
    clearInterval(countdownInterval);
  
    }
  })

  // Handler for making a guess
  const handleGuess = (letter) => {
    if (chances > 0 && !guessedLetters.includes(letter) && !isGameOver) {
      dispatch(makeGuess(letter));
    }
  };

  // Handler for restarting the game
  const handleRestart = () => {
    dispatch(restartGame());
    dispatch({ type: 'RESTART_GAME' }); // Clear game over status on restart
    setSecondsLeft(60); // Reset the countdown time on restart
  };

  // Check if the game is won or lost
  const isGameWon = word.split('').every((char) => guessedLetters.includes(char) || !/[A-Za-z]/.test(char));
  const isGameLost = chances === 0;

  // State for help and clues visibility
  const [showHelp, setShowHelp] = useState(false);
  const [showClues, setShowClues] = useState(false);

  // Toggle help and clues
  const toggleHelp = () => {
    setShowHelp(!showHelp);
    setShowClues(!showClues); 
  };

  return (
    <Card className='card'>
      <Container>
        <Row>
          <Col className='col'>
            <h1>Hangman Challenge</h1>
          </Col>
        </Row>
        <Row>
          {/* Display the guessed letters */}
          <Col style={{color:"white"}}>
            <div className="hangman-display">
              {word.split('').map((letter, index) => (
                <div 
                  key={index}
                  className={`hangman-letter ${
                    guessedLetters.includes(letter) ? 'revealed' : ''
                  }`}
                >
                  {guessedLetters.includes(letter) ? letter : '_'}
                </div>
              ))}
            </div>
          </Col>
          <Col>
            <div className="chances">Chances Left: {chances}</div>
          </Col>
        </Row>
        {!isGameWon && chances > 0 && secondsLeft > 0 && (
        <div className="countdown">Countdown: {secondsLeft} seconds</div>
      )}
        {/* Display "You Lost!" or "You Won!" as a button */}
        <Container className="text-center" style={{ paddingTop: "-10px" }}>
  {(chances === 0 || secondsLeft === 0) ? (
    <Button variant="success">Try Again</Button>
  ) : (
    isGameWon && <Button variant="success">You Won!</Button>
  )}
</Container>
        <Row>
          {/* Display letter buttons for making guesses */}
          <Col>
            <div className="letter-buttons">
              {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
                (letter) => (
                  <Button
                    key={letter}
                    variant="primary"
                    onClick={() => handleGuess(letter)}
                    disabled={guessedLetters.includes(letter) || isGameOver || isGameWon || isGameLost}
                  >
                    {letter}
                  </Button>
                )
              )}
            </div>
          </Col>
        </Row>
        <Row>
          {/* Display "Restart Game" and "Help" buttons */}
          <Col className='text-center'>
          
            <Button className="assistant-button" variant="danger" onClick={handleRestart}>
              Restart Game
            </Button>
            <Button className="assistant-button" variant='success' onClick={toggleHelp}>
              Help
            </Button>
            <br />
            {/* Display Help and Clues components when showHelp is true */}
            {showHelp && (
              <div className="text-center">
                <Help show={showHelp}/>
                <br />
                <Clues show={showHelp} /> 
              </div>
            )}
          </Col>
        </Row>
        {/* Display the HangmanGraphics component */}
        <Col>
          <HangmanGraphics chances={chances} /> 
        </Col>
       
      </Container>
    </Card>
  );
}

export default App;
