/*Rehana van Schalkwyk
 ES6  Assignment*/  
 
 
/*-------------------------------------------ES6 Classes----------------------------------------------------------*/
 //Inheritance
 class Animal
 {
	 constructor(name)
	 {
		 this.name = name;
		 
	 }
	
	speak()
	{
		console.log("Hi my name is " + name". ") ; 
	}
	 
 }
 
 class Bird extends Animal
 {
	 constructor(name)
	 {
			 super(name);
	 }
	 
	 //Override 
	 speak()
	{
		//calls Animal.speak()
		super.speak()//
		
		console.log("I am a bird and I chirp.");
	}
 }
 
 var budgee = new Bird("Tweety");
 budgee.speak(); //Hi my name is Tweety. I am a bird and I chirp.
 
 
/*-------------------------------------------ES6 Arrow Functions--------------------------------------------------*/
var animals = [
{type: 'bird', sound: 'chrip' },
{type: 'lion', sound: 'roar' },
{type: 'snake',sound: 'snake' }
];

console.log(animals.map(animal => animal.name));//bird lion snake

//Lexical this, Arrow functions 
function Animal(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the Animal object
  }, 1000);
}

var a = new Animal();

//object literals
var checkAge = a => a > 18 ? 18 : a; 
console.log(checkAge(21)); // 18
console.log(checkAge(12); // 12


var numbers = [1,2,3,4,5];
var sum = numbers.reduce((total, num) => total + num);
console.log(sum); // 15

/*-------------------------------------------ES6 Destructuring----------------------------------------------------*/
 //Array Destructuring
var nums = ["one", "two", "three"];
var [one, two, three] = nums;

//swapping
var a = 1;
var b = 3;

[a, b] = [b, a];

//Multiple Value return
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log("A is " + a + " B is " + b);// A is 1 B is 2


function ignore() {
  return [1, 2, 3];
}

var [a, , b] = ignore();
console.log("A is " + a + " B is " + b);//A is 1 and b is 3.

// Object Destructuring
var ob = {a: true, b: 24};
var {a, b} = ob;

console.log(a); // true
console.log(b); // 24 

//Assign new variable names
var {a: obj1, b: obj2} = ob;

console.log(obj1); // 42
console.log(obj2); // true  

//object property names and destructuring
let key = "d";
let { [key]: magicWord } = { d: "open" };

console.log(magicWord); // "open"

/*-------------------------------------------ES6 Spread operator, rest parameters---------------------------------*/
//Spread operator
var missingParts = ['two', 'three'];
var numberList = ['one', ...missingParts, 'four', 'five']; 
console.log(numberList)// one, two, three, four, five

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1); // 012345

//Rest Parameters
function arrayLength(...theArgs) {
  console.log(theArgs.length);
}

arrayLength();  // 0
arrayLength(10); // 1
arrayLength(4, 5, 6); // 3



function divide(divisor, ...dividends) {
  return dividends.map(function (dividend) {
    return dividend / divisor;
  });
}

var arr = divide(10, 100, 1000, 10000); 
console.log(arr); // [10, 100, 1000]