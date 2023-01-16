import Card from '../classes/Card';

// Initialized variables for testing Card functionality
const suit = '♠';
const value = '5';
const testCard = new Card(suit, value);

// Test the card
describe('A new initialized Card', () => {
  test('has correct suit', () => {
    expect(testCard.getSuit).toBe(suit);
  });

  test('has correct face value', () => {
    expect(testCard.getValue).toBe(value);
  });
});
