const animalNameElement = document.getElementById('animal-name');
const animalImageElement = document.getElementById('animal-image');
const animalVotesElement = document.getElementById('animal-votes');
const resetButton = document.getElementById('reset-button');

// Reset button event listener
resetButton.addEventListener('click', () => {
  resetVotes();
});

// Function to reset votes
function resetVotes() {
  // Perform the necessary logic to reset the votes
  // For example, you can send a PUT request to update the votes to 0 on the server
  
  // Update the UI to reflect the reset
  animalVotesElement.textContent = 'Votes: 0';
}

// Fetch animal details and votes from the server and update the UI
fetch('http://localhost:3000/characters/1') 
  .then(response => response.json())
  .then(animal => {
    animalNameElement.textContent = animal.name;
    animalImageElement.src = animal.image;
    animalVotesElement.textContent = `Votes: ${animal.votes}`;
  })
  .catch(error => {
    console.log('Error fetching animal details:', error);
  });
