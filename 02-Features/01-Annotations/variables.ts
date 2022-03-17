// ⭐ Type Annotations --> We as Developers have to specify the types manually for TypeScript
//-----------------------------
// Annotations with Primitives
//-----------------------------
let apples: number = 5;
let firstName: string = "Ankur";
let hasFirstName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//------------------------------------
// Annotations with Built-In Objects
//------------------------------------
let currentDate: Date = new Date();

//---------------------------
// Annotations with Objects
//---------------------------
// Arrays
let colors: string[] = ["red", "blue", "green"];
let price: number[] = [123, 18, 344];
let completed: boolean[] = [true, false, true];

// Classes
class Car {}
let myNewVehicle: Car = new Car();

// Object Literal
let coords: { lat: number; lng: number } = {
  lat: 31.0675,
  lng: 81.3119,
};

//---------------------------
// Annotations with Functions
//---------------------------
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// ⭐ Type Inference --> TypeScript itself guesses the types
//-----------------------------
// Inference with Primitives
//-----------------------------
let bananas = 20;
let lastName = "Sinha";
let hasLastName = true;
