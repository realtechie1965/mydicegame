var randomNumber = Math.floor(Math.random() * 6) + 1; 

var randomImageChoice = "dice" + randomNumber + ".png";

var randomDiceChoice = "images/" + randomImageChoice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceChoice);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageChoice2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageChoice2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 won"
}

else if (randomNumber2 > randomNumber) {
    document.querySelector("h1").innerHTML = "🚩Player2 won";
} 
else {
    document.querySelector("h1").innerHTML = "its a draw👍🤦‍♀️"
}