import { Button } from 'react-bootstrap';

const Help = ({ show }) => {
  const toggleHelp = () => {
    if (show) {
      window.alert(
        `Hangman Game Rules:\n\n` +
        `- Objective: The objective of the Hangman game is to guess the hidden word correctly before running out of chances.\n` +
        `- Gameplay: The game consists of a hidden word represented by dashes, each dash indicating a letter of the word.\n` +
        `- Guessing Letters: Players can guess one letter at a time. They can only guess letters from the English alphabet (A-Z).\n` +
        `- Chances: Players start with a certain number of chances (usually 6). Each incorrect letter guess reduces the chances by one.\n` +
        `- Winning: Players win the game by correctly guessing all the letters of the word before running out of chances.\n` +
        `- Losing: Players lose the game if they run out of chances before guessing the correct word.\n` +
        `- Already Guessed Letters: Players cannot guess a letter they have already guessed. Repeated guesses do not reduce the remaining chances.\n` +
        `- Display: After each guess, the game displays the current state of the word with correctly guessed letters filled in and dashes for unguessed letters.\n` +
        `- Game Over: The game is over when either the player wins or runs out of chances.\n` +
        `- Restart: Players can choose to restart the game at any point. Restarting the game generates a new random word to guess.\n`
      );
    }
  };

  return (
    <div>
      <Button onClick={toggleHelp}>Show Rules</Button>
    </div>
  );
};

export default Help;
