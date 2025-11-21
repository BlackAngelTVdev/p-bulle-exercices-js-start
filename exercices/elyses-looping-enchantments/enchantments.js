// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let count = 0;
  stack.forEach((i) => i === card ? count = count + 1 : null)
  return count
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // Utilisez la méthode reduce pour compter les cartes, ou un simple for...of comme demandé.
  let count = 0;

  for (const card of stack) {
    const isEven = card % 2 === 0;


    if (type === isEven) {
      count++;
    }
  }

  return count;
}
