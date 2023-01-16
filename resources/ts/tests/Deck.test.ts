import Deck from '../classes/Deck';

// Initial variables for testing Deck functionality
const testDeck = new Deck();
const orderedCards = testDeck.cards;

// Test Deck functionality
describe('A new initiailized Deck', () => {
  test('has 52 cards', () => {
    expect(testDeck.deckSize).toBe(52);
  });

  test('should have original cards after shuffling', () => {
    testDeck.shuffle();
    expect(testDeck.cards).toEqual(expect.arrayContaining(orderedCards));
  });
});
