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

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSum(numbers){
    let sum = 0;
    for (i=0; i < numbers.length; i++) {
        sum += (numbers[i] * numbers[i])
    }
    return sum
};

//Bob needs a fast way to calculate the volume of a cuboid with three values: the length,
// width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        // your code here
        let vol = 0
        vol = length * width * height
        return vol
    }
}

// I'm new to coding and now I want to get the sum of two arrays...
// Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {

    let sumArr1 = 0;
    let sumArr2 = 0;
    let sumArr = 0;
    for (i=0; i < arr1.length; i++) {
        sumArr1 += arr1[i]
    };
    for (n=0; n < arr2.length; n++) {
        sumArr2 += arr2[n]
    };
    sumArr += sumArr1 + sumArr2;
    return sumArr
};

//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
function findDifference(a, b) {
    let sumA = 1;
    let sumB = 1;
    for (i=0; i < a.length; i++) {
        sumA *= a[i]
    }
    for (n=0; n < b.length; n++) {
        sumB *= b[n]
    }
    let summ1 = sumB - sumA
    let summ2 = sumA - sumB
    if (sumA < sumB) {
        return summ1
    }
    else {
        return summ2
    }
};
//You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sumArr = 0;
    for (n=0; n < arr.length; n++) {
        if (arr[n] > 0) {
            sumArr += arr[n]
        }
    }
    return sumArr
};

//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    let arrA = 0
    let arrB = 0
    for (n=0; n < input.length; n++) {
        if (input[n] > 0) {
            arrA += 1
        }
        else {
            arrB -= (-input[n])
        }
    }
    return [arrA, arrB]
};

//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second
// element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

if (input === null || input.length === 0) {
    return [];
}
else {
    let arrA = 0;
    let arrB = 0;

    for (n=0; n < input.length; n++) {
        if (input[n] > 0) {
            arrA ++
        }
        else {
            arrB += input[n]
        }
    }

}
return [arrA, arrB];










