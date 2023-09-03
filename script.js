const grid = document.querySelector('.grid');

const character = [
    'bart',
    'bebê',
    'bob',
    'burns',
    'duffman',
    'homer',
    'krusty',
    'lisa',
    'marge',
    'millhouse',
    'moe',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {

    const card = createElement ('div', 'card');
    const front = createElement ('div', 'front face');
    const back = createElement ('div', 'back face');

    front.style.backgroundImage =  `url('./imagens/${character}.jpg')`;
    

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () => {
    
    character.forEach ((character) => {
    
    const card = createCard(character);
    grid.appendChild(card);


    });
} 

loadGame();