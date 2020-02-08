var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: "list",
        message: "What is your Role?",
        name: "roleSelect",
        choices:[
            "Manager",
            "Engineer",
            "Intern",
        ]
    }
  ])
  .then(answers => {
      if (answers.roleSelect === "Manager"){
          console.log("cool dude youre goiung to make a taema ")
      }else{
          console.log("You cannot make a team at this time. Please consult your manager")
      }
    
  });