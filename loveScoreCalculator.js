prompt("What is your name?");
prompt("Whats is their name?");

var  loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if(loveScore >= 80) {
    alert("Your lovescore is: " + loveScore + "%." + " You are made for each other!");
}

if(loveScore >= 30 && loveScore < 80) {
        
        alert("Your lovescore is: " + loveScore + "%");
    }

if(loveScore < 30) {
     
    alert("Your lovescore is: " + loveScore + "%." + " You are not made for each other!");
}





