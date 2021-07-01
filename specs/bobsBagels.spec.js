const equals = require('./../test-framwork')
const Basket = require('./../basket.js')

/* # Part 1
As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket */

//setup

let basket = new Basket();
let item = 'jerk bagel';

//execute

/*
 object        |message|properties|output
 basket, item  | add() |item''    |string
 */

let results = basket.add(item);

//verify

console.log(equals(results, item))
