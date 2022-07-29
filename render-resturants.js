export function renderRestaurants(favRestaurant) {

    const restaurantsItemEl = document.createElement('div');
    const restaurantNameEl = document.createElement('h2');
    const restaurantTypeEl = document.createElement('p');
    const restaurantFavoriteDishEl = document.createElement('p');
    const restaurantlocationEl = document.createElement('div');
    const restaurantStateEl = document.createElement('p');
    const restuarantCountyEl = document.createElement('p');
    const restuarantCityEl = document.createElement('p');

    restaurantNameEl.textContent = favRestaurant.name;
    restaurantTypeEl.textContent = `Type: ${favRestaurant.type}`;
    restaurantFavoriteDishEl.textContent = `Favorite Dish: ${favRestaurant.favorite}`;
    restaurantlocationEl.textContent = 'Location:';
    restaurantStateEl.textContent = `State: ${favRestaurant.location.state}`;
    restuarantCountyEl.textContent = `County: ${favRestaurant.location.county}`;
    restuarantCityEl.textContent = `City: ${favRestaurant.location.city}`;

    
    
    restaurantsItemEl.classList.add('restaurant-item');
    restaurantsItemEl.append(restaurantNameEl, restaurantTypeEl, restaurantFavoriteDishEl, restaurantlocationEl,);
    restaurantlocationEl.append(restaurantStateEl, restuarantCountyEl, restuarantCityEl);

    return restaurantsItemEl;

}

