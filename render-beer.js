export function renderBeer(beerItem) {
    const brandEl = document.createElement('p');
    
    brandEl.classList.add('beer');
    brandEl.textContent = beerItem;

    return brandEl;
}