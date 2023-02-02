/**
 * return the sumary from between two intergers
 * @param {int} firstElement
 * @param {int} finalElement
 * @returns {int}
 */
const sum = (firstElement, finalElement) => {
  let result = 0;

  for (let i = firstElement; i <= finalElement; i++) {
    result += i;
  }

  return result;
};

/**
 * Calculate the sum with condiction
 * @param {int} firstElement
 * @param {int} finalElement
 * @param {boolean} condiction
 * @returns {int}
 */
const calculate = (firstElement, finalElement, condiction) => {
  const response = sum(firstElement, finalElement);
  return condiction === true ? response * 2 : response;
};

//Test
let result = calculate(1, 5, true);
console.log("Result 1: " + result)

let result2 = calculate(1, 5, false);
console.log("Result 2: " + result2)