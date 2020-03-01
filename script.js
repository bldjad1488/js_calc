'use strict';

let   resultNum       = 0,
      result          = '',
      resultBanner    = document.querySelector('.result');  

const oneButton       = document.querySelector('.one'),
      twoButton       = document.querySelector('.two'),
      threeButton     = document.querySelector('.three'),
      fourButton      = document.querySelector('.four'),
      fiveButton      = document.querySelector('.five'),
      sixButton       = document.querySelector('.six'),
      sevenButton     = document.querySelector('.seven'),
      eightButton     = document.querySelector('.eight'),
      nineButton      = document.querySelector('.nine'),
      nullButton      = document.querySelector('.nul'),
      plusButton      = document.querySelector('.plus'),
      minusButton     = document.querySelector('.minus'),
      timesButton     = document.querySelector('.times'),
      dividedByButton = document.querySelector('.divided-by'),
      resultButton    = document.querySelector('.result_button'),
      clearButton     = document.querySelector('.clear_button'),
      backspaceButton = document.querySelector('.backspace');

oneButton.addEventListener('click', function() {
    result += '1';
    resultNum += 1;
    resultBanner.textContent = result;
});

twoButton.addEventListener('click', function() {
    result += '2';
    resultNum += 2;
    resultBanner.textContent = result;
});

threeButton.addEventListener('click', function() {
    result += '3';
    resultNum += 3;
    resultBanner.textContent = result;
});

fourButton.addEventListener('click', function() {
    result += '4';
    resultNum += 4;
    resultBanner.textContent = result;
});

fiveButton.addEventListener('click', function() {
    result += '5';
    resultNum += 5;
    resultBanner.textContent = result;
});

sixButton.addEventListener('click', function() {
    result += '6';
    resultNum += 6;
    resultBanner.textContent = result;
});

sevenButton.addEventListener('click', function() {
    result += '7';
    resultNum += 7;
    resultBanner.textContent = result;
});

eightButton.addEventListener('click', function() {
    result += '8';
    resultNum += 8;
    resultBanner.textContent = result;
});

nineButton.addEventListener('click', function() {
    result += '9';
    resultNum += 9;
    resultBanner.textContent = result;
});

nullButton.addEventListener('click', function() {
    result += '0';
    resultNum += 0;
    resultBanner.textContent = result;
});

clearButton.addEventListener('click', function() {
    result = '';
    resultNum = 0;
    resultBanner.textContent = result;
});

plusButton.addEventListener('click', function() {
    result += ' + ';
    resultNum = 0;
    resultBanner.textContent = result;
});

minusButton.addEventListener('click', function() {
    result += ' - ';
    resultNum = 0;
    resultBanner.textContent = result;
});

timesButton.addEventListener('click', function() {
    result += ' * ';
    resultBanner.textContent = result;
});

dividedByButton.addEventListener('click', function() {
    result += ' / ';
    resultBanner.textContent = result;
});

resultButton.addEventListener('click', function() {
    result = eval(result);
    resultBanner.textContent = result;
});

backspaceButton.addEventListener('click', function() {
    result = result.slice(0, -1);
    resultBanner.textContent = result;
});


