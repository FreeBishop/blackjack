import Card from './Card';
import Deck from './Deck';

/**
 *  Dealer class instance
 */
export default class Dealer {
  hand: Card[];

  // Constructor to make new Dealer
  constructor(dealerDeck: Deck) {
    this.hand = dealerDeck.cards.splice(0, 2);
  }

  //   get handValue(): number {

  //   }
}
