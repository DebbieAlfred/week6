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
    
