let student = ["Steven","Mark","Jay"];

// document.getElementById("output").innerHTML = student[0];

// let loopcounter = 0;

// while(loopcounter < student.length){
//     document.getElementById("output").innerHTML += student[loopcounter]+ "<br/>";
//     loopcounter += 1;
// }

//syntax 1
// function hello(){
//     alert("Hello World!!!!!");

// }

// hello();

// Syntax 2 
// let x = function(){
//     alert("2nd methord of calling function!!!!");
// }

// x();

// arrow function 

let cubeNumber = (intvalue) => intvalue * intvalue * intvalue;

// let cubeNumber = function(intvalue){
//     document.getElementById("output").innerHTML = intvalue * intvalue * intvalue;

// }

let  x = prompt("Input number to cude : ")
document.getElementById("output").innerHTML = cubeNumber(x);