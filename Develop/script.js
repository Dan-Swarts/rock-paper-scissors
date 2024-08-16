const playGame = function () {

  // Create an object to track our statistics
  const stats = statsObject//hint: look at the structure of the print out at the bottom of this function.

  // Array of options for computer to pick from
  const options = ['R', 'P', 'S'];

  let keepPlaying = true;

  // Loop until the user chooses to stop
  while (keepPlaying) {

    // Ask user for their choice
    let userChoice = window.prompt('Enter R, P, or S:');

    // If user pressed Cancel, immediately end function
    if (userChoice == null) {
      return;
    }

    // Convert to uppercase to make comparisons easier
    userChoice.toUpperCase();

    // Check that the user made a valid choice
    if (userChoice != 'R' && userChoice != 'P' && userChoice != 'S') {
      window.alert('Please enter a valid choice.');
    } else {
      //Check what the user input, track the statistics

      if (userChoice == 'R') {

      } else if (userChoice == 'P') {

      } else {

      }
      

      // Get random index from array of options
      const index = Math.floor(Math.random() * options.length);
      const computerChoice = options[index];

      //Alert the user what the computer chose
      

      // If choices are the same, it's a tie
      if (userChoice === computerChoice) {
        // write the logic for a tie outcome

        
      } else if (
        // Check every win condition for the player
        ) {
        stats.wins++;
        window.alert('You win!');
        
      } else {
        // If above conditions failed, assume player lost

      }

      // Ask user to play again, if not stop the loop
      
    }
  }

  // Print stats with line breaks
  window.alert(`Stats:
    Wins: ${stats.wins}
    Losses: ${stats.losses}
    Ties: ${stats.ties}

    Your choices:
    Rock: ${stats.count.rock}
    Paper: ${stats.count.paper}
    Scissors: ${stats.count.scissors}`);
};

// Run the game
playGame();
