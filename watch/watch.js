"use strict";

/**
 * Remove all the elements within an element
 */
const clearElement = (element) => {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/**
 * Returns true if number is even
 */
const isEven = (num) => num % 2;

/**
 * On form submit, builds a grid pattern out of octothorpes and spaces like:
 * # # # 
 *  # # #
 * # # #
 *  # # #
 */
const buildGrid = (event) => {
  event.preventDefault();

  let numberOfRows = event.target[0].value;
  let numberOfColumns = event.target[1].value;
  let grid = ''

  for (let x = 0; x < numberOfRows; x++) {
    for (let y = 0; y < numberOfColumns; y++) {
      if (isEven(x)) {
        grid += isEven(y) ? '#' : ' ';
      } else {
        grid += isEven(y) ? ' ' : '#';
      }
    }
  } 

  const output = document.querySelector('.output');
  clearElement(output);
  output.textContent = grid;
};

/**
 * Sets up form event listener
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', buildGrid, false)
}, false);
