/**
 *  Card class instance
 *
 *  @param {string} suit The suit/family of the card
 *  @param {string} value The numerical or letter-based value of the card
 */
export default class Card {
  readonly suit: string;
  readonly value: string;

  // Constructor for a single Card
  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }

  // Getter for suit value
  get getSuit() {
    return this.suit;
  }

  // Getter for card value
  get getValue() {
    return this.value;
  }
}
