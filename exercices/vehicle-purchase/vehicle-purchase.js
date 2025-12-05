// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
export const kind = "car";
export const option1 = "Wuling Hongguang";
export const option2 = "Toyota Corolla";
export const originalPrice = 1000;
export const age = 3;

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind == "car" || kind == "truck" ? true : false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const enplus = " is clearly the better choice.";
  let choise = option1 < option2 ? option1 : option2;
  return choise + enplus;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let divisible;
  if (age < 3) {
    divisible = 80;
  } else if (age > 10) {
    divisible = 50;
  } else {
    divisible = 70;
  }
  return (originalPrice * divisible) / 100;
}
