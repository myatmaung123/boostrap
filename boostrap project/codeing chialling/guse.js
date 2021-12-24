//add an aerry list 
const guesslist = ["luffy", "zoro", "nami", "usopp", "sanji", "chopper", "vivi"];
const userInput =prompt("What is you name ?");

if(guesslist.includes(userInput)){
    alert(`Welcome to our tame, ${userInput}`);
}else{
    alert("You are not on the list...");
}