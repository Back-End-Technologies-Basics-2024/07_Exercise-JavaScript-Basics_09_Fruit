function solve(fruit, grams, price){
    'use strict'
    let needMoney = (grams * price) / 1000;
    let kilograms = grams / 1000;
    console.log(`I need $${needMoney.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);