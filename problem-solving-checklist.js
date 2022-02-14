// 1. conversion 
//feetToInch
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
console.log((feetToInch(12)));

//2.conversion
//centimeterToMeter
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
console.log((centimeterToMeter(300)));
//3.calculation
//pageRequirements
//book1 has 100 pages, book2 has 200 pages, book3 has 300 pages
function pageRequirements(quantity1, quantity2, quantity3) {
    const book1TotalPages = 100 * quantity1;
    const book2TotalPages = 200 * quantity2;
    const book3TotalPages = 300 * quantity3;
    const totalBooksPages = book1TotalPages + book2TotalPages + book3TotalPages;
    return totalBooksPages;
}
console.log('Total page requirement is:', (pageRequirements(5, 7, 10)));

//4.bestfriend,input an array of strings and return the big size of name
const friends = ['abul', 'babul', 'mabul', 'chabul', 'ebul', 'fihtabullah', 'mihtazul', 'anan'];
function bestfriend(bigName) {
    let best = bigName[0];
    for (const friend of bigName) {
        if (friend.length > best.length) {
            best = friend;
        }
    }
    return best;
}
console.log((bestfriend(friends)));

//5. onlyPositive. will stop the loop if the array has any negative number and return all the positive number before the negative number.
const numbers = [30, 50, 3, 50, 70, 90, 50, -2, 5, -5, 10, 20, 30];
function onlyPositive(numbers) {
    let myArray = [];
    for (const number of numbers) {
        if (number > 0) {
            myArray.push(number);
        }
        else if (number < 0) {
            break;
        }
    }
    return myArray;
}
console.log(onlyPositive(numbers));
//6.return all the positive numbers from an array and don't stop the loop
const myNumber = [3, 5, 7, 9, 12, 15, -2, -5, -8, 0, 10, 50, -13];
function allPositive(numbers) {
    let myArray = [];
    for (const number of numbers) {
        if (number > 0) {
            myArray.push(number);
        }
        else {
            continue;
        }
    }
    return myArray;
}
console.log((allPositive(myNumber)));

//remove duplicate items from an array 
const items = ['abal', 'jamal', 'habal', 'kamal', 'abal', 'famal', 'jamal', 'abal', 'namal'];
function removeDuplicate(items) {
    let myArray = [];
    for (const item of items) {
        if ((myArray.indexOf(item)) == -1) {
            myArray.push(item);
        }
        else {
            continue;
        }
    }
    return myArray;
}
console.log((removeDuplicate(items)));

//print all even numbers from 1 to 20 in a function.
function evenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
        else {
            continue;
        }
    }
}
evenNumbers();
//count numbers divisible by 3 from 1 to 20;
function countNumberDivisibleBy3() {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            count++;
        }
        else {
            continue;
        }
    }
    return count;
}
console.log((countNumberDivisibleBy3()));

//calculate the average of all the numbers that is divisible by 3 from 1 to n;
function averageOfAllNumbersDivisibleBy3(number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0) {
            sum += i;
            count++;
        }
        else {
            continue;
        }
    }
    let average = sum / count;
    return average;
}
console.log((averageOfAllNumbersDivisibleBy3(20)));
// another example 
function averageOfAllNumbersDivisibleBy5(number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 5 == 0) {
            sum += i;
            count++;
        }
        else {
            continue;
        }
    }
    let average = sum / count;
    return average;
}
console.log((averageOfAllNumbersDivisibleBy5(50)));

// reverse a string 
const myString = 'hello,how are you?';
function reverseString(text) {
    let string = '';
    for (const element of text) {
        string = element + string;;
    }
    return string;
}
console.log((reverseString(myString)));

//count words in a string 
const sentence = 'hello everyone.    hello    developers';
function wordCount(text) {
    let wordCounts = 0;
    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        if (element == " " && text[i - 1] != " ") {
            wordCounts++;
        }
    }
    wordCounts++;
    return wordCounts;
}
console.log((wordCount(sentence)));
// another example 
const mySentence = 'ok hello, my  name  is abul kader.  Not  obaidul kader.';
function countWords(text) {
    let wordCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == " " && text[i - 0] != " ") {
            wordCount++;
        }
    }
    wordCount++;
    return wordCount;
}
console.log((wordCount(mySentence)));
//fibonacci series [0,1,1,2,3,5,8,13,21,34,55];

function fibonacci(number) {
    let fibo = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log((fibonacci(10)));

//factorial 5! = 5 x 4 x 3 x 2 x 1;

// incremental 
function getfactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log((getfactorial(5)));
// decremental 
function getfactorial1(number) {
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log((getfactorial1(5)));

//count how many numbers divisible by 3 from 1 to 20
function divisibleBy3(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0) {
            count++;
        }
        else {
            continue;
        }
    }
    return count;
}
console.log((divisibleBy3(20)));

//calculate the average of all the numbers that is divisible by 3,1 to 20

function calculateAverage(number) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
            count++;
        }
        else {
            continue;
        }
    }
    let average = sum / count;
    return average;
}
console.log((calculateAverage(20)));

//count word in an string 
function countWords(string) {
    let wordCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == " " && string[i - 1] != " ") {
            wordCount++;
        }
        else {
            continue;
        }
    }
    wordCount++;
    return wordCount;
}
const hisString = 'hello, how   are     you';
console.log((countWords(hisString)));

//count vowel in a string 
function countVowel(string) {
    let count = 0;
    for (const element of string) {
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count++;
        }
        else {
            continue
        }
    }
    return count;
}
console.log((countVowel('The most common things in our life is dead')));
// the other way to solve this problem
function countVowel1(string) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (const element of string) {
        if (vowel.indexOf(element) != -1) {
            count++;
        }
        else {
            continue;
        }
    }
    return count;
}
// console.log((countVowel1('The most common things in our life is dead')));

// findout the second largest element in an array 
function getSecondLargest(numbers) {
    let largest = numbers[0];
    let secondLargest = numbers[0];
    for (const element of numbers) {
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        }
        else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}
// console.log((getSecondLargest([20, 24, 52, 88, 90, 89])))

//return the next number 
function nextNumber(number) {
    let next = number + 1;
    return next;
}
console.log((nextNumber(-2)));

//area of triangle 
function areaOfTriangle(base, height) {
    let area = 1 / 2 * base * height;
    return area;
}
console.log((areaOfTriangle(7, 4)));

//convert age to days ; (ignore leap year and days between last birthday)
function ageToDays(age) {
    let days = age * 365;
    return days;
}
console.log(ageToDays(18));

//input a number and return this cube
function cubeNumber(number) {
    let cube = Math.pow(number, 3);
    return cube;
}
console.log((cubeNumber(2)));

//return the first element in an array 
function firstElement(numbers) {
    for (const element of numbers) {
        return element;
    }
}
console.log((firstElement([22, 23, 80, 84, 01, 02])));

//power calculator 
function powerCalculator(base, power) {
    let number = Math.pow(base, power);
    return number;
}
console.log((powerCalculator(20, 2)));

//maximum edge of a triangle ;(find out the maximum range of third edge)
//(formula: (side1+side2)-1);
function maximumEdge(side1, side2) {
    let edge = (side1 + side2) - 1;
    return edge;
}
console.log((maximumEdge(10, 17)));

//return the remainder from two numbers 
function remainder(num1, num2) {
    let remaining = num1 % num2;
    return remaining;
}
console.log((remainder(10, 3)));

//find the perimeter of a rectangle
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log((perimeterOfRectangle(6, 7)));

//return something to me
function returnSomething(text) {
    let message = 'something' + ' ' + text;
    return message;
}
console.log((returnSomething('is better than nothing')));

// return the sum of polygon angle 
function sumOfPolygon(side) {
    let sum = (side - 2) * 180;
    return sum;
}
console.log((sumOfPolygon(4)));

//swap the two given numbers
function swapNumbers(num1, num2) {
    const swap = [num1, num2] = [num2, num1];
    return swap;
}
console.log((swapNumbers(20, 2)));

// reverse an array 
function reverseArray(array) {
    let reverse = [];
    for (let i = ((array.length) - 1); i >= 0; i--) {
        let element = array[i];
        reverse.push(element);
    }
    return reverse;
}
console.log((reverseArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])));

//add 1 to every element in an array
function addOne(array) {
    let add = [];
    for (let element of array) {
        element++;
        add.push(element);
    }
    return add;
}
console.log((addOne([2, 3, 4, 5, 6, 7])));

//find out the string is odd or even
function oddOrEven(string) {
    for (const element of string) {
        if (element.length % 2 == 0) {
            return 'The string is even';
        }
        else {
            return 'The string is odd';
        }
    }
}
console.log((oddOrEven('sumon')));

//drop the first element of an array
function dropFirst(array) {
    let drop = [];
    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        drop.push(element);
    }
    return drop;
}
console.log((dropFirst([1, 2, 3, 4, 5, 6])));

//concatenating two integer arrays
function concatenating(array1, array2) {
    let concatenate = [];
    for (const element of array1) {
        concatenate.push(element);
    }
    for (const element of array2) {
        concatenate.push(element);
    }
    return concatenate;
}
console.log((concatenating([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])));

//find the index of an element in an array
function findIndex(array, element) {
    let index = array.indexOf(element);
    return index;
}
console.log((findIndex(['abul', 'babul', 'mabul', 'chabul'], 'chabul')));

//counting the elements of an array into a new array which is greater than num1 and less than num2
function countingElement(num1, num2, array) {
    let newArray = [];
    for (const element of array) {
        if (element > num1 && element < num2) {
            newArray.push(element);
        }
        else {
            continue;
        }
    }
    return newArray;
}
console.log((countingElement(3, 8, [3, 2, 1, 9, 7, 5, 6, 4, 8])));

//is the word singular or plural(don't take verb or person or number)
function singularOrPlural(word) {
    if (word[(word.length) - 1] == 's') {
        return 'The word is plural';
    }
    else {
        return 'The word is singular';
    }
}
console.log((singularOrPlural('balls')));

//Array of word lengths
function wordLength(words) {
    let array = [];
    for (const word of words) {
        let elementLength = word.length;
        array.push(elementLength);
    }
    return array;
}
console.log((wordLength(['abul', 'samad', 'akbar', 'josima'])));

//spaces between each character
function spaces(word) {
    let space = ' ';
    for (const element of word) {
        space = space + element + ' ';
    }
    return space;
}
console.log((spaces('university')));

//find out the third largest number in an array
function thirdLargestNumber(numbers) {
    let largest = numbers[0];
    let secondLargest = numbers[0];
    let thirdLargest = numbers[0];
    for (const element of numbers) {
        if (element > largest) {
            thirdLargest = secondLargest;
            secondLargest = largest;
            largest = element;
        }
        else if (element > secondLargest) {
            thirdLargest = secondLargest;
            secondLargest = element;
        }
        else if (element > thirdLargest) {
            thirdLargest = element;
        }
        else {
            continue;
        }
    }
    return thirdLargest;
}
console.log((thirdLargestNumber([3, 10, 32, 44, 40, 35, 16, 50, 47, 45, 2, 1, 7])));

//arithmetic sequence
//3,5,7,9 or 1,2,3,4,5, or 1,5,9,13,17 or 1,10,19,28 or -5,-8,-11 
//so, nth = n1 + (n-1)*d;

//return the next element of arithmetic sequence; no error handle required;suppose, all users inputs a valid arithmetic sequence
function arithmeticSequence(numbers) {
    let element = (numbers[(numbers.length) - 1]) - ((numbers[(numbers.length) - 2]));
    let nextElement = (numbers[(numbers.length) - 1]) + element;
    return nextElement;
}
console.log((arithmeticSequence([1, 4, 7, 10, 13])));
