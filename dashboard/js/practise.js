var life = "JavaScript Test"; // Variable dec

//creatin a function in Javascript
function upperCase(text) {
    const upperCased = text.toUpperCase();

    console.log(upperCased);

}
upperCase(life); // calling the function


//Another Format of creating a fuction
const adder = (num1, num2) => {

    console.log(num1 + num2);

}
adder(4, 5);

// String Concatination
const named = "Obed";
const age = 24;
console.log(`My name is ${named} am ${age} years old, am getting old every day`);


// Conditions statements if..else
const aged = 24;
const time = 10

if (aged<5 || time === 10) {
    console.log("You are in the age  of being a junior Dev");
    
} else  if( aged===20){

    console.log( "The Future is going fine and wow in Technology");
}else{

    console.log("You are a Dev with technology experiencce");
    
}

// Creating an Array
const toDo = ["Wake Up 5am", "Wash my Face", "Have a Breakfast", "Prepare for Work"]

// Accessing the value within the array
console.log(toDo[3]);

// Adding a value to the array
toDo.push("Hello");
console.log(toDo);
// Removing the last index
toDo.pop();
console.log();

// accessing using the index

const timed = toDo.indexOf("Wake Up 4am");
console.log(toDo[timed]);

// Working with Objects
const home = {
    location: "Ongata Rongai",
    expediture: 450000,
    price :1460000,
    shoppin:['sugar', 'flour', 'cooking oil', 'Juice'],

// Function inside the object
    sayExp: function(){
        console.log(this.location);

    }

}
home.sayExp();
console.log(home.expediture);

const students = ["obed", "john", "trevor", "enock", "joel"]

for ( student of students){
    console.log(student);
    if (student==="obed"){
        console.log(`Obed He is the prefect of the class`);
        break;
    }
}


