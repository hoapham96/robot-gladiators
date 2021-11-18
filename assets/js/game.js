// // window.alert(fight());
// var playerName =  window.prompt("What is your robot's name?");
// // Note the lack of quotation marks around playerName
// console.log(playerName)
// window.alert(playerName);
// window.alert(fight());

// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log("Our robot's name is " + playerName);

// var playerName = "Tony the Robot";

// // Tony the Robot is ready for battle!
//     console.log("Tony the Robot" + " is ready for battle!");

// // "Tony the Robot is ready for battle!"
//     console.log(playerName + " is ready for battle!");

// // "Your robot, Tony the Robot, has won!
//     console.log("Your robot, " + playerName + ", has won!");
// // this creates a function named "fight"

// function fight() {
//     window.alert("The fight has begun!");
// }
// // fight();

// this creates a function named "fight"

// function fight() {
//     window.alert("The fight has begun!");
// }
// fight()
// // window.prompt("What is your robot's name?");

// var playerName = window.prompt("What is your robot's name?");
// // Note the lack of quotation marks around playerName window.alert(playerName);


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};

fight();
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
     enemyHealth = enemyHealth - playerAttack; 

    // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked "+ enemyName + ". " +enemyName + " now has "+ enemyHealth + " health remaining.");

    // check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so we know that it worked.
    console.log(enemyName + " attacked "+ playerName + ". " +playerName + " now has "+ playerHealth + " health remaining.")
//   
// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  }
  
  