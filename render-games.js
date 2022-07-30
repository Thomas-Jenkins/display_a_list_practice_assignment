export function renderGames(game) {

    const gameItemEl = document.createElement('div');
    const gameNameEl = document.createElement('h2');
    const gameGenreEl = document.createElement('ul');
    // const genresEl = document.createElement('ul');
    const hoursPlayedEl = document.createElement('h3');

    gameNameEl.textContent = game.title;
    gameGenreEl.textContent = 'Genres:';
    hoursPlayedEl.textContent = game.hoursplayed; 

    for (let genre of game.genre) {
        const genreEl = document.createElement('li');

        genreEl.textContent = `${genre}`;
        gameGenreEl.append(genreEl);
    }

    gameItemEl.append(gameNameEl, gameGenreEl, hoursPlayedEl);
    gameItemEl.classList.add('game-item');

    return gameItemEl;
}