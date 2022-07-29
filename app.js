// import functions and grab DOM elements
import { candies } from './candies-Data.js';
import { renderCandy } from './render-candies.js';
import { beers } from './beer-data.js';
import { renderBeer } from './render-beer.js';

const candyItemListEl = document.getElementById('candies');
const beerId = document.getElementById('beers');
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



