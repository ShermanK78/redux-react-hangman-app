// Import the hangman images
import hangman0 from './graphics/hangmandrawings/hangman0.png';
import hangman1 from './graphics/hangmandrawings/hangman1.png';
import hangman2 from './graphics/hangmandrawings/hangman2.png';
import hangman3 from './graphics/hangmandrawings/hangman3.png';
import hangman4 from './graphics/hangmandrawings/hangman4.png';
import hangman5 from './graphics/hangmandrawings/hangman5.png';
import hangman6 from './graphics/hangmandrawings/hangman6.png';

// HangmanGraphics component
const HangmanGraphics = ({ chances }) => {
  // Array of hangman image paths
  const imagePaths = [
    hangman0,
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6
  ];

  // Determine the current image path based on chances
  const currentImagePath =
    chances > 0 ? imagePaths[6 - chances] : imagePaths[imagePaths.length - 1];

  // Render the HangmanGraphics component
  return (
    <div className="hangman-graphics">
      {/* Display the current hangman image */}
      <img src={currentImagePath} alt={`Hangman stage ${chances}`} />
    </div>
  );
};

// Export the HangmanGraphics component
export default HangmanGraphics;
