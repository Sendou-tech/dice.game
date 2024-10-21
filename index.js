imageManipultaor();

function randomNumberGenerator(){

    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    return randomNumber;
}

function headerTextManipulator(n1, n2){

    if(n1 > n2)
    {
        document.getElementById("winner-board").innerHTML = " 🚩 Player 1 Wins";
    }
    else if(n2 > n1){
 document.getElementById("winner-board").innerHTML = "Player 2 Wins 🚩"
    }
    else if(n1 === n2 ){
        document.getElementById("winner-board").innerHTML = "Its a draw, try again !!"
    }


}

function imageManipultaor(){

    var r1 = randomNumberGenerator();
    var r2 = randomNumberGenerator();

    document.getElementById("player1-dice").setAttribute("src", "./assets/images/"+r1+".svg");
    document.getElementById("player2-dice").setAttribute("src", "./assets/images/"+r2+".svg");

    headerTextManipulator(r1, r2);

}