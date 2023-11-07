function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    let sum = num / 3;
    return(sum)
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    let average = (num1 + num2) / 2
    return(average)
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    let sum = num1 + num2 + num3 + num4
    let average = sum / 4
    return(average)
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    let doubledNums = [];
    for (let i = 0; i < nums.length; i++) {
        doubledNums.push(nums[i] * 2)
    }
    return(doubledNums)
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    arr3 = arr1.concat(arr2)
    return(arr3)
};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    const isFound = arr.indexOf(word) !== -1;
    if (isFound === true) {
        return(isFound)
    } else {
        return(isFound)
    }
}
;

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    let first = str.toUpperCase() + " ... ";
    let second = first + str + " ... ";
    let third = second + str.toLowerCase();
    return(third)
};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */

};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    let string = "Hello, " + name
    return(string)
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    let string = "Bye, " + name
    return(string)
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    if (num === 5) {
        return(true)
    } else {
        return(false)
    }
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    if (num / 2 || num % 0 ) {
        return(false)
    } else {
        return(true)
    }
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */

    searchStr = searchString.indexOf(subString)
    return(searchStr)

};


function aCounter(word) {
    let index = 0;
    let count = 0;

    for (char in word) {
    let char = word[index];
    if (char === 'a' || char === 'A') {
        count += 1;
    }
    }   index++;

    return(count);
}
module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
