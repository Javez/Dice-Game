
var randomNumber1, randomNumber2;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("body div .img1").setAttribute("src", ("images/dice" + randomNumber1 + ".png"));
document.querySelector("body div .img2").setAttribute("src", ("images/dice" + randomNumber2 + ".png"));
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").setHTML("No Winners");
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").setHTML("🏴First winner");
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").setHTML("Second winner🏴");
}