alert("Note: To Play Please Refresh the page")
let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1st random number 

let randomImage1 = "dice" + randomNumber1 + ".png"; //this creates the dice img name by using string concatenation

let randomImageSource1 = "images/" + randomImage1; //this creates actual source path for the dice image we can line 4 in line 6 also 

let image1 = document.querySelector(".img1"); //this selects the img1.

image1.setAttribute("src", randomImageSource1); //this set attribute src to randomImageSource1

const randomNumber2 = Math.floor(Math.random() * 6) + 1; //2nd random number 

const randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // this is create the source path name for the dice2 

const image2 = document.querySelector(".img2");//this selecte the image 2 

image2.setAttribute("src", randomImageSource2); // this change the source attribute to randomImageSource2

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerText = "Player 1 Wins!!!🚩";  //this if statement execute when player 1 wins
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerText = "Player 2 Wins!!!🚩"; //this will execute when player 2 wins 
}
else {
    document.querySelector('h1').innerText = "It's a Draw!!!🥱🥱"; //this will execute when it's draw 
}



