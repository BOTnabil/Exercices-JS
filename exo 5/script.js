const container = document.getElementById("quotes-container");

const favorites =  [];

function toggleFavorite(index) {
    const favoriteIndex = favorites.indexOf(index);
    if (favoriteIndex === -1) {
        favorites.push(index);
    } else {
        favorites.splice(favoriteIndex, 1);
    }
    displayQuotes();
}

function displayQuotes() {
      container.innerHTML = '';
      quotes.forEach((quote, index) => {
        const quoteElement = document.createElement("div");
        quoteElement.classList.add("quote");

      const titleElement = document.createElement("h2");
      titleElement.textContent = quote.title;

      const quoteTextElement = document.createElement("p");
      quoteTextElement.textContent = quote.quote;

      const dateElement = document.createElement("p");
      dateElement.textContent = `Date: ${quote.date}`;

      const favoriteIcon = document.createElement("i");
      favoriteIcon.classList.add("fa-heart", "heart-icon", favorites.includes(index) ? "fas" : "far");
      favoriteIcon.addEventListener("click", () => toggleFavorite(index));

      quoteElement.appendChild(titleElement);
      quoteElement.appendChild(quoteTextElement);
      quoteElement.appendChild(dateElement);
      quoteElement.appendChild(favoriteIcon);

      container.appendChild(quoteElement);
    });
}

displayQuotes();