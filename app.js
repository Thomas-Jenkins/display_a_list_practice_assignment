// import functions and grab DOM elements
import { candies } from './candies-Data.js';
import { renderCandy } from './render-candies.js';
import { beers } from './beer-data.js';
import { renderBeer } from './render-beer.js';
import { restaurants } from './restaurants-data.js';
import { renderRestaurants } from './render-resturants.js';
import { games } from './games-data.js';
import { renderGames } from './render-games.js';

const candyItemListEl = document.getElementById('candies');
const beerId = document.getElementById('beers');
const restaurantItemListEl = document.getElementById('restaurants');
const gameItemListEl = document.getElementById('games');

// for (let candy of candies) {
        
//     const candyEl = renderCandy(candy);
//     candyEl.append(candyItemListEl);
// }

for (let beerItem of beers) {

    const beerEl = renderBeer(beerItem);
    beerId.append(beerEl);

}

for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candyItemListEl.append(candyEl);
}

for (let restaurantItem of restaurants) {
    const restaurantsEl = renderRestaurants(restaurantItem);
    restaurantItemListEl.append(restaurantsEl);
}
for (let game of games) {
    const gameEl = renderGames(game);
    gameItemListEl.append(gameEl);
}


