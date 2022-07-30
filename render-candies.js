export function renderCandy(pieceOfCandy) {
    
    const candyItemEl = document.createElement('div');
    const candyNameEl = document.createElement('h2');
    const candyTypeEl = document.createElement('p');
    const joyLevelEl = document.createElement('p');
    


    candyNameEl.textContent = pieceOfCandy.name;
    candyTypeEl.textContent = `Type: ${pieceOfCandy.type}`;
    joyLevelEl.textContent = `Joy Level: ${pieceOfCandy.joylevel}`;

    candyItemEl.classList.add('candy-item');
    candyItemEl.append(candyNameEl, candyTypeEl, joyLevelEl);


    return candyItemEl;
}
    
    
    
    
    
    
    
    