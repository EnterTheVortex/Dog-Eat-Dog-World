// ===============================
// Breed Detail Page Loader
// ===============================
function loadBreedPage() {
  const params = new URLSearchParams(window.location.search);
  const breedName = params.get("name");

  const container = document.getElementById("breed-info");

  if (breedName && typeof dogBreeds !== "undefined") {
    // Look up by key (case-insensitive)
    const key = breedName.toLowerCase();
    const breed = dogBreeds[key];

    if (breed && container) {
      container.innerHTML = `
        <h2>${breed.name}</h2>
        ${breed.image ? `<img src="${breed.image}" alt="${breed.name}" class="breed-img">` : ""}
        <p><strong>Origin:</strong> ${breed.origin}</p>
        <p><strong>History:</strong> ${breed.history}</p>
        <p><strong>Temperament:</strong> ${breed.temperament}</p>
        <p><strong>Lifespan:</strong> ${breed.lifespan}</p>
        <p><strong>Size:</strong> ${breed.size}</p>
        <p><strong>Exercise Needs:</strong> ${breed.exercise}</p>
        <p><strong>Grooming:</strong> ${breed.grooming}</p>
        <p><strong>Health Issues:</strong> ${breed.health}</p>
        <p><strong>Training:</strong> ${breed.training}</p>
        <h3>Fun Facts:</h3>
        <ul>
          ${breed.funFacts.map(fact => `<li>${fact}</li>`).join("")}
        </ul>
        <a href="breeds.html" class="btn">Back to Breeds</a>
      `;
    } else if (container) {
      container.innerHTML = `
        <p>Breed information not found. Please return to the <a href="breeds.html">breeds list</a>.</p>
      `;
    }
  }
}

// ===============================
// Breed Search/Filter (on breeds.html)
// ===============================
function setupBreedSearch() {
  const searchInput = document.getElementById("breed-search");
  const breedList = document.querySelectorAll(".breed-list li");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      breedList.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(term) ? "block" : "none";
      });
    });
  }
}

// ===============================
// Mobile Navigation Toggle
// ===============================
function setupHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector("nav ul");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }
}

// ===============================
// Initialize Functions
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  loadBreedPage();
  setupBreedSearch();
  setupHamburgerMenu();
});
