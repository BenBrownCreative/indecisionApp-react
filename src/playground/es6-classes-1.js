console.log('es6 classes');

class Person {
    // runs the inital constructor function
    // in the arguments we can provide defaults 
    constructor(firstName = 'John', lastName = 'Doe', age = 0) {
        // this refers to the class instance
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
    getGreeting() {
        return `Hi, I'm ${this.firstName}.`
    }
    getDescription() {
        return `${this.firstName} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(firstName = 'John', lastName = 'Doe', age = 0, major) {
        super(firstName, lastName, age);
        this.major = major
    }
    hasMajor() {
        // double false to check if string is !== undefined
        return !!this.major
    }
    // override the basic fuction from the parent
    // getDescription() {
    //     return `${this.firstName} is ${this.age} years old`
    // }

    // get the description from the parent by running its function then modifying it
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }

}

class Traveler extends Person {
    constructor(firstName = 'bob', lastName, age, hometown) {
        super(firstName, lastName, age);
        this.hometown = hometown;
    }
    hasHometown() {
        return !!this.hometown
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHometown()) {
            greeting += ` I'm visiting from ${this.hometown}`
        }
        return greeting
    }
}


const me = new Traveler('Ben', 'Brown', 39, 'Hendersonville' )
const who = new Traveler()
console.log(me.getGreeting());
console.log(who.getGreeting());
