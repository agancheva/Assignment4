// 1. Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.
/*var ANIMAL = ANIMAL || {}
	ANIMAL.Cat = {};
	ANIMAL.Dog = {};*/


//2. Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.
/*function Cat(){};
Dog.construtor;
*/

//3. Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.
/*function Cat() {};
Dog.construtor;
var kitty = new Cat();
var puppy = new Dog();*/


// 4. Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 
/*function Animal() {
	console.log("The Animal has been created!");	
}
var Animal = new Animal();*/

// 5. Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
/*function Animal(){
	console.log("The Animal has been created!");	
}
var animal = new Animal();
animal.construtor;
*/


//6. Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 
/*var Animal = function(type, breed, color, height, length) {
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}

var cat = new Animal("Cat", "Siamese", "Grey", "9in", "18in");
console.log(cat);*/


//7. Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
/*var Animal = function(type, breed, color, height, length) {
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
}
var cat = new Animal();
for (var property in cat) {
	console.log(property);
}*/

//8. Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*var Animal = function(type, breed, color, height, length) {
	this.type = type;
	this.breed = breed;
	this.color = color;
	this.height = height;
	this.length = length;
};

var cat = new Animal("Cat", "Siamese", "Grey", "9in", "18in");


function speak() {
	if (this.type == "Dog") {
		console.log("The " + this.color + " dog is barking!");
	} else {
		console.log("The " + this.color + " cat is meowing!");
	}
}

speak();*/

// 11. Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).

/*var Vehicle = function(make, model, totalMiles,lastOilChange) {
	this.make = make;
	this.model = model;
	this.totalMiles = 0;
	this.lastOilChange = 0;
}*/
