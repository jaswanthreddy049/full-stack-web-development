var number1=Math.floor(Math.random()*6)+1;
var number2=Math.floor(Math.random()*6)+1;
if(number1<number2){
    document.getElementsByTagName("h1")[0].innerHTML="player 2 wins";
}
else if(number1>number2){
    document.getElementsByTagName("h1")[0].innerHTML="player 1 wins";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML="draw";
}
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+number1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+number2+".png");