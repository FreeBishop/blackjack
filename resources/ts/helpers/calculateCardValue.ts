import Card from '../classes/Card';

/**
 *  Calculate the total value of a hand (Blackjack) by iterating through each card
 *
 * @param {Card[]} hand Array representing the cards in a player/dealer hand
 */
export const calculateHandValue = (hand: Card[]) => {
  let handValue = 0;

  // Iterate through hand and sum up each card value
  hand.map((card) => {
    // Initial check for if face is a letter, otherwise do regular string -> number conversion
    if (isNaN(Number(card.getValue))) {
      switch (card.getValue) {
        case 'A':
          if (handValue < 11) {
            handValue += 11;
          } else {
            handValue++;
          }
          break;

        case 'J':
          handValue += 10;
          break;

        case 'Q':
          handValue += 10;
          break;

        case 'K':
          handValue += 10;
          break;

        // Default case handling unexpected letters
        default:
          handValue += 0;
          break;
      }
    } else {
      handValue += Number(card.getValue);
    }
  });

  // If handValue > 21 and the hand contains an Ace, reduce the value by 10
  if (handValue > 21 && hand.find((card) => (card.getValue === 'A') != null)) {
    handValue -= 10;
  }

  return handValue;
};
