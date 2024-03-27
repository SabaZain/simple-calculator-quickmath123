#! /usr/bin/env node
// Simple Calculator Using Inquirer
import inquirer from "inquirer";

console.log("Welcome to codewithsaba - simple calculator");

const answers : {
    numberOne:number,
    numberTwo:number,
    operator:string
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second no:"   
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%", "**"],
        message: "Select Operator:"
    },
]);
const{numberOne,numberTwo,operator} = answers;
if(numberOne && numberTwo && operator){
    let result:number = 0;
    if(operator === "+"){
        result = numberOne + numberTwo
    } else if(operator === "-"){
        result = numberOne - numberTwo
    } else if(operator === "*"){
        result = numberOne * numberTwo
    } else if(operator === "/"){
        result = numberOne/numberTwo
    } else if(operator === "%"){
        result = numberOne/numberTwo * 100
    } else if(operator === "**"){
        result = numberOne ** numberTwo
    }
    console.log("Your result is : " , result);
} else {
    console.log("Kindly enter valid input");
}
console.log("Thankyou for using codewithsaba - simple calculator");