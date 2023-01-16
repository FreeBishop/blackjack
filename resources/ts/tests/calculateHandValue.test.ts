import { calculateHandValue } from '../helpers/calculateCardValue';
import Card from '../classes/Card';

// Test cards...suit does not matter for this test
const card1 = new Card('♣', 'J');
const card2 = new Card('♣', '9');
const card3 = new Card('♣', 'A');

/**
 *  Test for correct calculation of total hand value for Blackjack game
 */
describe('Given a player/dealer hand...', () => {
  test('♣J and ♣9 should be 19', () => {
    expect(calculateHandValue([card1, card2])).toBe(19);
  });

  test('♣9 and ♣A should be 20', () => {
    expect(calculateHandValue([card2, card3])).toBe(20);
  });

  test('♣J and ♣A should be 21', () => {
    expect(calculateHandValue([card1, card3])).toBe(21);
  });

  test('♣A and ♣A should be 12', () => {
    expect(calculateHandValue([card3, card3])).toBe(12);
  });

  test('♣J, ♣A, and ♣9 should be 20', () => {
    expect(calculateHandValue([card1, card3, card2])).toBe(20);
  });
});
