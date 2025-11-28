// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;

  if (wedgesNeeded <= 0) {
    return 0;
  }

  for (let i = 0; i < limes.length; i++) {
    const limeSize = limes[i];
    let wedgesFromCurrentLime = 0;

    switch (limeSize) {
      case "small":
        wedgesFromCurrentLime = 6;
        break;
      case "medium":
        wedgesFromCurrentLime = 8;
        break;
      case "large":
        wedgesFromCurrentLime = 10;
        break;
      default:
        break;
    }

    wedgesCut += wedgesFromCurrentLime;
    limesCut++;

    if (wedgesCut >= wedgesNeeded) {
      break;
    }
  }

  // return limesCut;
}


/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let remaining = [...orders];

  while (timeLeft > 0 && remaining.length > 0) {
    const nextJuice = remaining[0];
    const mixTime = timeToMixJuice(nextJuice);
    remaining.shift(); 
    
    
    if (timeLeft > 0) {
      timeLeft -= mixTime;
    } 
    // pas le choix de faire que si il y a encore du temps il faut soustraire
  }

  return remaining;
}