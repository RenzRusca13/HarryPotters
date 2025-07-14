let allCards = [];

function renderCharacters(data) {
  const charactersContainer = document.getElementById("characters");
  charactersContainer.innerHTML = ""; 

  data.forEach(character => {
    const key = character.name.toLowerCase();
    const githubImage = `https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/characters/${characterImages[key]}`;
    const fallbackImage = character.image || 'https://via.placeholder.com/200x250?text=No+Image';

    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <img src="${githubImage}" alt="${character.name}" onerror="this.onerror=null;this.src='${fallbackImage}'">
      <h3>${character.name}</h3>
      <p><strong>House:</strong> ${character.house || 'Unknown'}</p>
      <p><strong>Actor:</strong> ${character.actor || 'N/A'}</p>
    `;
    charactersContainer.appendChild(card);
    allCards.push({ element: card, name: character.name.toLowerCase() });
  });
}


document.getElementById("searchInput").addEventListener("input", function (e) {
  const search = e.target.value.toLowerCase();
  allCards.forEach(({ element, name }) => {
    element.style.display = name.includes(search) ? "block" : "none";
  });
});
