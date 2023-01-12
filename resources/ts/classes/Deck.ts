import { suits, values } from './cardProperties';
import Card from './Card';

/**
 *  Deck class instance
 */
export default class Deck {
  cards: Card[];

  // Constructor for deck of cards
  constructor() {
    this.cards = suits.flatMap((suit) => {
      return values.map((value) => {
        return new Card(suit, value);
      });
    });
  }

  // Get size of deck
  get deckSize(): number {
    return this.cards.length;
  }

  // Shuffle deck since constructor builds in specific order
  shuffle(): void {
    for (let index = this.deckSize - 1; index > 0; index--) {
      const newIndex = Math.floor(Math.random() * (index + 1));
      const newCard = this.cards[newIndex];
      this.cards[newIndex] = this.cards[index];
      this.cards[index] = newCard;
    }
  }
}
