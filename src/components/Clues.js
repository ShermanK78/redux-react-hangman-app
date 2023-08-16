import { Button } from 'react-bootstrap';

const Clues = ({ show }) => {
    const toggleClue = () => {
      if (show) {
        window.alert(
          `Hangman Clues:\n\n` +
          `Here are some clues to help you guess the word:\n` +
          `- Strategy 1: Start by guessing common vowels to reveal parts of the word early.\n` +
          `- Strategy 2: Deduce possible words by guessing letters based on word length.\n` +
          `- Strategy 3: Target common consonant pairs and clusters to unveil more letters.\n` +
          `- Strategy 4: Guess letters based on their frequency in the English language.\n` +
          `- Strategy 5: Make educated guesses by ruling out less likely letters.\n`
        );
      }
    };
  
    return (
      <div>
        <Button onClick={toggleClue}>Show Strategies</Button>
      </div>
    );
  };
  
  export default Clues;
  