//console.log("Hi I'm test.js and I've details about Array and Object destructuring :)");

//-----------------Array Destructuring-------------------

//let introduction = ["Hello", "I", "am", "Madushan"];

//-----------------Method #1 - Prior to ES6
//const greeting = introduction[0];
//const name = introduction[3];

//-----------------Method #2 - Skipping items by sperating them using ',' / Basic Array Destructuring
//let [greeting, , , name] = introduction;

//-----------------Method #3
//let [greeting, , , name] = ["Hello", "I", "am", "Madushan"];

//-----------------Method #4 - Declaring variables before assignment
//let greeting, name;
//[greeting, , , name] = ["Hello", "I", "am", "Madushan"];

//-----------------Method #5 - Assigning rest of the array (rest will be an array)
//let [greeting, ...rest] = ["Hello", "I", "am", "Madushan"];
//console.log(rest);

//-----------------Method #6 - Destructuring with functions
// function iamaFunction() {
//   return ["Hello", "I", "am", "Madushan"];
// }
// let [greeting, , , name] = iamaFunction();

//-----------------Method #7 - Using Default values
//let [greeting = "Hi", name = "Perera"] = ["Hello"];

//console.log(greeting + ", " + name);

//-----------------Method #8 - Swapping values
// let a = 2;
// let b = 5;

// [a, b] = [b, a];

// console.log(a, "- a was 2");
// console.log(b, "- b was 5");

//-----------------Object Destructuring------------------

//-----------------Method #1 - Prior to ES6
// let person = { name: "Madushan", country: "Sri Lanka", job: "Developer" };

// let name = person.name;
// let country = person.country;
// let job = person.job;
//console.log(name + " " + country + " " + job);

//-----------------Method #2 - Basic Object Destructuring
//let { name, country, job } = person;

//-----------------Method #3
//let { name, country, job } = { name: "Madushan", country: "Sri Lanka", job: "Developer" };

//-----------------Method #4 - Veriables declared before begin assigned, At this time we need () - This is because the {} on the left hand side is considered a block and not an object literal.
//let name, country, job;
//{ name, country, job } = person --> Wrong X
//({ name, country, job } = person);
//({ name, country, job } = { name: "Madushan", country: "Sri Lanka", job: "Developer" });  --> variable name should be same as the property name of the object.

//-----------------Method #4 - Using a new varible name insted of property name.
//let foo, lol, newJobName;

// ({ name: foo, country: lol, job: newJobName } = {
//   name: "Madushan",
//   country: "Sri Lanka",
//   job: "Developer",
// });
//console.log(foo, lol, newJobName);

// let { name: foo, country: lol } = { name: "Madushan", country: "Sri Lanka" };
// console.log(foo, lol);

//-----------------Method #5 - Using default values.
//let { name = "Perera", country = "USA", job = "Engineer" } = { name: "Madushan", country: "Sri Lanka",};

//-----------------Method #4 - Using default values with Using a new varible names
// let foo, lol, newJobName;
// ({ name: foo = "Perera", country: lol, job: newJobName = "Engineer" } = { name: "Madushan", country: "Sri Lanka",});
// console.log(foo, lol, newJobName);

//-----------------Method #6 - Computed property name.
// let propertyName = "name";
// let { [propertyName]: name, country } = { name: "Madushan", country: "Sri Lanka", };
// console.log(name, " ", country);

//-----------------Method #7 - Combining arrays with objects
// let person = {
//   name: "Madushan",
//   country: "Sri Lanka",
//   job: "Developer",
//   friends: ["Shehan", "Kasun", "Sonal"],
// };
// console.log(person);

// let { friends } = person;
// console.log(friends);

//-----------------Method #8 - Object nesting and Destructuring.
// let person = {
//   name: "Madushan",
//   place: { country: "Sri Lanka", city: "Colombo" },
//   friends: ["Shehan", "Kasun", "Sonal"],
//   job: "Developer",
// };

// let { place } = person;
// console.log(place);

// let {
//   place: { country, city, city2 = "Kandy" },
// } = person;
// console.log(country, " ", city, " ", city2);

//-----------------Method #9 - Rest in Object Destructuring.
// let person = {
//   name: "Madushan",
//   place: { country: "Sri Lanka", city: "Colombo" },
//   friends: ["Shehan", "Kasun", "Sonal"],
//   job: "Developer",
// };

// let { name, ...rest } = person;
// console.log(name);
// console.log(rest);

//-----------------Method #10 - Object Destructuring can be used in functions
// function myFunction({ name: x, job: y } = {}) {
//   console.log(x + " " + y);
// }
// myFunction({ name: "Madushan", job: "Developer" });

//-----------------Method #11 - With default values.
// function myFunction({ name: x = "Madushan", job: y = "Engineer" } = {}) {
//   console.log(x + " " + y);
// }
// myFunction({ name: "Perera" });
// myFunction();
