"use strict"

/*You are presented with a string with a collection of data which are mixed alphabets i.e., "abdsgyhidsaadgbdaasbvcydsaabdgsaayre", create a function that will count through the string and show the number of a, b, d and y each contained in the string.
Note: the output is expected to be a number for each of the counted elements.*/ 
function alphabets(str){
let strArray=str.split("");

let containerA = [];
let containerB = [];
let containerD = [];
let containerY = [];

for (let i = 0; i < strArray.length; i++){
    if (strArray[i] === "a"){
        containerA.push(strArray[i]);
    } if (strArray[i] === "b"){
        containerB.push(strArray[i]);
    } if (strArray[i] === "d"){
        containerD.push(strArray[i]);
    } if (strArray[i] === "y"){
        containerY.push(strArray[i]);
    } 
    }
    
    console.log(`the number of a is ${containerA.length}`);
    console.log(`the number of b is ${containerB.length}`);
    console.log(`the number of d is ${containerD.length}`);
    console.log(`the number of y is ${containerY.length}`);
    
    }
    alphabets("abdsgyhidsaadgbdaasbvcydsaabdgsaayre");

    /*Given a string of items to be ``rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair" use methods to separate the edible and non-edible items from the string.
Note: your output should be two new strings, one containing edible items and the other non-edible items.
*/ 

let items = "rice, yam, beans, cocoyam, banana, semo, table, tyre, milk, phone, watch, chair"
let itemsArray = items.split(", ");

let containerEdible = [];
let containerNonEdible = [];

for (let i = 0; i < itemsArray.length; i++){
if (itemsArray[i] === "rice" || 
itemsArray[i] === "yam" || 
itemsArray[i] === "beans" || 
itemsArray[i] === "cocoyam" || 
itemsArray[i] === "banana" || 
itemsArray[i] === "semo" || 
itemsArray[i] === "milk") {
    containerEdible.push(itemsArray[i]);
} else {
 containerNonEdible.push(itemsArray[i]);
}   
}
let joinEdible = containerEdible.join(", ");
console.log(`the edible items are "${joinEdible}"`);

let joinNonEdible = containerNonEdible.join(", ");
console.log(`the nonedible items are "${joinNonEdible}"`);