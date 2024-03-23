#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "Firstnumber" },
    { message: "Entre Your Second Number", type: "number", name: "Secondnumber" },
    {
        message: "Select One Operator To Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
if (answers.operator === "Addition") {
    console.log(answers.Firstnumber + answers.Secondnumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.Firstnumber - answers.Secondnumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.Firstnumber * answers.Secondnumber);
}
else if (answers.operator === "Division") {
    console.log(answers.Firstnumber / answers.Secondnumber);
}
else {
    console.log("Invalid Output");
}
