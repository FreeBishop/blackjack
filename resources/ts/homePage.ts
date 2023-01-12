import Card from './classes/Card';
import Deck from './classes/Deck';
import '../scss/homePage';

const dealerDeck = new Deck();
dealerDeck.shuffle();
console.log(dealerDeck);
