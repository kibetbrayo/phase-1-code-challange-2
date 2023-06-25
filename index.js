document.addEventListener('DOMContentLoaded', () => {
  const animalNamesList = document.getElementById('animal-names');
  const animalDetailsContainer = document.getElementById('animal-details');
  const voteButton = document.getElementById('vote-button');
  const voteInput = document.getElementById('vote-input');

  let animals = [];

  function fetchAnimalData() {
    return fetch('http://localhost:3000/characters')
      .then(response => response.json())
      .then(data => {
        animals = data;
        renderAnimalNames();
        displayAnimalDetails(animals[0]);
      })
      .catch(error => {
        console.log('Error fetching animal data:', error);
      });
  }

  function renderAnimalNames() {
    animalNamesList.innerHTML = animals
      .map(animal => `<li>${animal.name}</li>`)
      .join('');

    animalNamesList.querySelectorAll('li').forEach((listItem, index) => {
      listItem.addEventListener('click', () => {
        displayAnimalDetails(animals[index]);
      });
    });
  }

  function displayAnimalDetails(animal) {
    animalDetailsContainer.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}">
      <p>Votes: ${animal.votes}</p>
    `;
  }

  function updateVoteCount() {
    const votes = parseInt(voteInput.value, 10);
    if (!isNaN(votes)) {
      const votesParagraph = animalDetailsContainer.querySelector('p');
      votesParagraph.textContent = `Votes: ${votes}`;
    }
  }

  fetchAnimalData();

  voteButton.addEventListener('click', updateVoteCount);
});
