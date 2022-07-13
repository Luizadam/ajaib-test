# AJAIB
## WEB ENGINEERING TEST
There are two attached tests, namely:
- Question 
- Personal Project

## this for the answer Question
- in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with ‘new’ operator

- for instance methode
var person = {name:"Luiz Adam",say:function(){return "Hello My Name is "+this.name}}
for class methode
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function() {
  alert(this.name);
};
let user = new User("Luiz Adam");
user.sayHi();

- class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}
class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();

- i think i will change the function first
- cosnt jane = () => {
    const name = 'jane';
    const mid = 'A';
    const final = 'B+';
    return {
      midtermScore: () => mid,
      finaltermScore: () => final,
    }
  }
  jane().midtermScore(); 
  jane().finaltermScore();
- Verify there is no dead page or invalid redirects.
First check all the validations on each field.
Wrong inputs to perform negative testing.
Verify the workflow of the system.
Verify the data integrity.
Browser compatibility
Operating system compatibility
Compatible to various devices like notebook, mobile, etc.

- i use oracle web logic server becuase Easy to access,Communicative,Agile

- Deployment plan (Cut over plan)
Rollback plan
Deployment exercise
Going through tasks and the communication plan
Releasing tasks to task lists
Check points

- you can see my readme

## Personal Project

I made a web covering about
- Search by Keayword
- Filter by Gender
- Pagination

## Tech
i uses a number of open source projects to work properly:

- ReactJS
- Bootstrap 
- axios
- github

## Installation

Install the dependencies and devDependencies and start the server.
```sh
cd ajaib-test
npm install
npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## I hope my explanation is useful for you

