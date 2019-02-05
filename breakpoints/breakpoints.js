"use strict";

const add = (x, y) => {
  return x + y;
};

const calculate = (event) => {
  event.preventDefault();

  const sum = add(event.target[0].value, event.target[1].value);

  const output = document.querySelector('.output');
  output.textContent = `The answer is:  ${sum}`;
};

document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator');

  calculator.addEventListener('submit', calculate, false)
}, false);


/**
 * Breakpoint Practice Snippet
 *
console.clear();

const a = () => {
  console.log('a');
}

const b = () => {
  a();
  console.log('b');
}

b();
 *
 */

