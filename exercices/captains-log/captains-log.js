// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let num = Math.random()* (9999 - 1000) + 1000;
  return `NCC-${num}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
    const min = 41000;
    const max = 42000;
     
    return  Math.random() * (max - min) + min;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const VALID_PLANET_CLASSES = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const numClasses = VALID_PLANET_CLASSES.length; 

  const randomIndex = Math.floor(Math.random() * numClasses);
  
  return VALID_PLANET_CLASSES[randomIndex];
}
