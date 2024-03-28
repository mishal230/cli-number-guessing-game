#! /usr/bin/env node
import inquirer  from "inquirer";

const randomNumber = Math.floor(Math.random()* 6 + 1);
const answers = await inquirer.prompt([{
    message:`WELCOME TO THE GUESS GAME!
Please Guess the number between 1-6:`,
    type:"number",
    name:"guessedNumber"
}
]);

if(answers.guessedNumber === randomNumber){
    console.log("Congratulations, you guess the right number!");
}else if(answers.guessedNumber >= randomNumber){
    console.log("Too high, Try Again!");
}else if(answers.guessedNumber <= randomNumber){
    console.log("Too low, Try Again!");
}else{
        console.log("Please enter the valid number!");
    }