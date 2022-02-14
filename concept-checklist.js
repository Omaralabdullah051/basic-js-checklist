/*   1.   write 3 variables(number,string,boolean)             */
let price = 20;
const name = 'abul';
var isRaining = true;
/* 2. write 2 variables using(let,const) and show the difference */
let pocketMoney = 100;
price += 100; /* let cannot be redeclared but can be reassigned , have block scope */

const hisName = 'habul'; /* const cannot be redeclared and reassigned, have block
scope */
// 3. +,-,*,/,% simple math operations 
const firstNumber = 5;
const secondNumber = 10;
const multipyNumbers = firstNumber * secondNumber;
console.log(multipyNumbers);

//4. comparision ()
const firstFriendsMoney = 1000;
const secondFriendsMoney = 1800;
if (firstFriendsMoney > secondFriendsMoney) {
    console.log('first friend is richer than second friend');
}
else {
    console.log('second friend is richer than first friend');
}

//5. two conditions, case-1:fulfill both conditions. case-2:fulfill at least one conditions. 6.if-else statement.
const hasFlat = false;
const hasCar = false;
const money = 100000;
if (hasFlat == true && money == 100000) {
    console.log('done the job.you got it man.');
}
else if (hasCar == true || money == 100000) {
    console.log('ok.man.No,problem.You got it.');
}
else {
    console.log('jah,beta.mura kha');
}
//7. while loop to display 7 to 19 all numbers.only display odd numbers including 7 to 19.
let i = 7
while (i <= 19) {
    console.log(i);
    i += 2;
}
//8. declare an array . number of elements.update or change 4th element.add or remove elements. check whether specific value exits in the array.
const myArray = ['abul', 'fabul', 'mabul', 'cabul', 'habul', 'nabul'];
console.log(myArray.length);
myArray[4] = 'zabul';
myArray.pop();
myArray.push('ebul');
console.log(myArray);
//9. use any for loop display every elements of an array 
for (const element of myArray) {
    console.log(element);
}
// or 
for (let i = 0; i < myArray.length; i++) {
    let element = myArray[i];
    console.log(element);
}
//10.you have an array of numbers.display only the numbers bigger than 80

const hisArray = [20, 22, 3, 91, 30, 99, 87, 8, 10];
for (const element of hisArray) {
    if (element > 80) {
        console.log(element);
    }
}

//11. write a function that takes three numbers and return the multiplication of the three numbers 
function multiplication(num1, num2, num3) {
    let multiply = num1 * num2 * num3;
    return multiply;
}
console.log((multiplication(30, 3, 2)));

//12.declare an object and change any property of that object
const myINfo = {
    myname: 'abul',
    age: 11,
    height: 5,
    class: 2
}
console.log(myINfo.age);
//Findout the cheapest book ..
const hisInfo = {
    name: 'abul',
    class: 12,
    age: 11,
    section: allPositive,
    subject: [
        { name: 'physics', price: 200 },
        { name: 'chemistry', price: 180 },
        { name: 'biology', price: 240 },
        { name: 'highermath', price: 220 },
        { name: 'global studies', price: 190 }
    ]
}
function cheapestBook(object) {

}