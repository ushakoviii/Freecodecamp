//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
    function evenOrOdd(number) {
    if (number %2 === 0) {return "Even"}
    else {return "Odd"}
};
//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
};

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    if (num <= 0) {
        return num
    }
    else {
        return num-(2*num)
    }
};
// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
// Task
// Fix the bug so we can all go home early.
// Notes
// String str will never be null.

var replaceDots = function(str) {
    return str.replace(/[\.\/]/g,'-');
};




