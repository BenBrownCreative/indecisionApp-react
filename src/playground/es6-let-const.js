console.log('play');

// only use let if you plan to redefine the variable
// let and const are block scoped as well as function scoped

var fullName = 'Ben Brown';

if (fullName) {
    var firstName = fullName.split(' ')[0];
}
console.log(firstName); // this works because an if statement is a block but not a function

const fullName1 = 'Ben Brown';

if (fullName1) {
    const firstName1 = fullName1.split(' ')[0];
}
//console.log(firstName1); // this does not work because of block scoping