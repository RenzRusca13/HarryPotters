const charactersContainer = document.getElementById("characters");

fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
      const card = document.createElement("div");
      card.className = "character-card";
      card.innerHTML = `
        <img src="${character.image || 'https://via.placeholder.com/200x250?text=No+Image'}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p><strong>House:</strong> ${character.house || 'Unknown'}</p>
        <p><strong>Actor:</strong> ${character.actor || 'N/A'}</p>
      `;
      charactersContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching character data:", error);
    charactersContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
  });