import Deck from './classes/Deck';
import '../scss/homePage';

// Create playing deck
const dealerDeck = new Deck();
dealerDeck.shuffle();
