const suits = ["&hearts;", "&diams;", "&clubs;", "&spades;"];
const values = ["A", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];
const players = [
    { id: "player1", cards: [] },
    { id: "player2", cards: [] },
];

for (let suit of suits) {
    for (let value of values) {
        deck.push({ suit, value });
    }
}

for (let i = 0; i < 6; i++) {
    for (let player of players) {
        const cardIndex = Math.floor(Math.random() * deck.length);
        const card = deck.splice(cardIndex, 1)[0];
        player.cards.push(card);
    }
}

for (let player of players) {
    let playerDiv = document.getElementById(player.id);
    for (let card of player.cards) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = `${card.value} ${card.suit}`;
        playerDiv.appendChild(cardDiv);
    }
}