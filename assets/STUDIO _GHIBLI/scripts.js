const select = document.getElementById('films');
    const details = document.getElementById('film-details');

    // Fetch the list of films and populate the dropdown menu
    fetch('https://studio-ghibli-films-api.herokuapp.com/films')
      .then(response => response.json())
      .then(films => {
        films.forEach(film => {
          const option = document.createElement('option');
          option.value = film.id;
          option.textContent = film.title;
          select.appendChild(option);
        });
      });

    // When a film is selected, fetch its details and display them
    select.addEventListener('change', event => {
      const filmId = event.target.value;
      if (filmId) {
        fetch(`https://studio-ghibli-films-api.herokuapp.com/films/${filmId}`)
          .then(response => response.json())
          .then(film => {
            const imageUrl = film.poster;
            const title = film.title;
            const description = film.description;
            const romanizedTitle = film.original_title_romanised;
            const releaseDate = film.release_date;
            const director = film.director;

            details.innerHTML = `
              <img src="${imageUrl}" alt="${title}">
              <h2>${title}</h2>
              <p>${description}</p>
              <ul>
                <li><strong>Romanized title:</strong> ${romanizedTitle}</li>
                <li><strong>Release date:</strong> ${releaseDate}</li>
                <li><strong>Director:</strong> ${director}</li>
              </ul>
            `;
          });
      } else {
        details.innerHTML = '';
      }
    });