/*Rehana van Schalkwyk
 ES6  Assignment*/  
 
 
 // ES6 Classes
 class Animal
 {
	 constructor(name)
	 {
		 this.name = name;
		 
	 }
	
	speak()
	{
		alert("Hi my name is " + name) ; 
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
		
		alert("I am a bird and I chirp.");
	}
 }
 
 var budgee = new Bird("Tweety");
 budgee.speak();
 
 
 //ES6 Arrow Functions
 
 