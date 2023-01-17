import { clientLogger } from './etc/loglevel/devLogger';
import * as element from './etc/htmlElements';
import Dealer from './classes/Dealer';
import Deck from './classes/Deck';
import '../scss/homePage';

// Create playing deck
const playingDeck = new Deck();
playingDeck.shuffle();

// Init buttons
element.dealerHitBtn.onclick = () => {
  if (dealer.handValue < 17) {
    let prevHandValue = dealer.handValue;
    dealer.hit(playingDeck);
    let currHandValue = dealer.handValue;
    console.log(prevHandValue, currHandValue, dealer.hand);
  } else {
    console.log('Dealer must stand');
  }
};

// Test create dealer
const dealer = new Dealer(playingDeck);
console.log(dealer);
