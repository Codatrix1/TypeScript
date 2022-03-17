//----------------------
// Types in TypeScript
//---------------------

// PRIMITIVE Types -> [STRING, NUMBER, BOOLEAN,  UNDEFINED, NULL, SYMBOL, VOID]
// OBJECT Types -> [OBJECTS, CLASSES, ARRAYS, FUNCTIONS]

// ⭐ Important Note: About Object Types
// We can trick the typescript compiler in a good way to categorize even the Object Types a different types

//----------------
// Some Examples
//----------------

// Date Example
const today = new Date();
today.getMonth();

// Object Example
const person = {
  age: 20,
};
person.age;

// Class Example
class Color {}
const red = new Color();
