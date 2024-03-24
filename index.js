#! /usr/bin/env node
import inquirer from "inquirer";
const guessNum = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "guessNumberGame",
        type: "number",
        message: "guess the number:",
    }]);
if (answer.guessNumberGame === guessNum) {
    console.log("Congratulation you guess right number");
}
else {
    console.log("you guess wrong number");
}
