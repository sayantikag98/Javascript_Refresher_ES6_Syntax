/*
  LET, CONST KEYWORDS
*/

let value = 10;
console.log(value);

/*
  ARROW FUNCTION
*/

const func1 = () => {
  let a = 10;
  console.log(this.a);
};

func1();

/*
  ES6 SYNTAX FOR CLASSES
*/

class myClass {
  a = 10;
  b = 20;
  c = 30;
  print = () => {
    console.log(this.a, this.b, this.c);
  };
}

const objNew = new myClass();
objNew.print();

class Person extends myClass {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
    this.a = 200;
  }

  print = () => {
    console.log(this.name, this.age);
  };
}

const person = new Person("Sayantika", 23);
console.log(person.name, person.age, person.a, person.b, person.c);
person.print();

console.log(objNew.a);

/*
  SPREAD OPERATOR AND REST PARAMETER
*/

let arr = [1, 2, 3, 4];
arr = [...arr, 7, 8, 9]; // SPREAD OPERATOR FOR ARRAY
console.log(arr);

let obj = {
  name: "Sayantika",
  age: 23,
  location: "Kolkata",
};

obj = { ...obj, occupation: "student" }; // SPREAD OPERATOR FOR OBJECT
console.log(obj);

const func = (...arg) => arg.filter((ele) => ele > 50); // REST PARAMETER
const sortFunc = (...args) => args.sort((a, b) => a - b); // REST PARAMETER

console.log(func(10, 2, 3, 7, 464, 57));

console.log(sortFunc(10, 2, 3, 7, 464, 57));

/*
DESTRUCTURING
*/

const [a, b] = [10, 20]; // ARRAY DESTRUCTURING
console.log(a, b);

const { name, age } = { name: "Sayantika", age: () => console.log(23) }; // OBJECT DESTRUCTURING
console.log(name);
age();

/*
VALUE AND REFERENCE

PRIMITIVE TYPES LIKE NUMBER, STRING, BOOLEAN ARE PASSED BY VALUES
NON-PRIMITIVE TYPES LIKE ARRAYS AND OBJECTS ARE PASSED BY REFERENCE
*/
const obj1 = {
  name: "Sayantika",
};

// PASS BY REFERENCE
const nameObj = obj1;
console.log(nameObj.name, obj1.name);
nameObj.name = "Ghosh";
console.log(nameObj.name, obj1.name);

// PASS BY VALUE BY SPREAD OPERATOR -> VALUES ARE COPIED
const nameObj1 = {
  ...obj1,
};
console.log(obj1.name, nameObj1.name);
nameObj1.name = "Sayantika";
console.log(obj1.name, nameObj1.name);

// ARRAY METHODS

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ar.map((ele) => 2 * ele)); // MAP METHOD
console.log(ar.filter((ele) => ele > 5)); // FILTER METHOD
ar.forEach((ele) => console.log(ele)); // FOREACH METHOD
