import { calculateHandValue } from '../helpers/calculateCardValue';
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

  // Get numerical value of the Dealer's hand
  get handValue(): number {
    return calculateHandValue(this.hand);
  }

  // Give Dealer a card from the playing deck
  hit(playingDeck: Deck): void {
    if (playingDeck.deckSize > 0) {
      this.hand.push(<Card>playingDeck.cards.pop());
    }
  }
}
