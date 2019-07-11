var stage = 0;
var money = Number(10);
var bet = 0;
var gameover = false;
var bestscore = 10;
document.getElementById('main').style.width = "278px";
//var socket = io("localhost:80");
var socket = io();
var name ="";

 
function buttonclick() {

  if (gameover) {
    alert("please refresh")

  } else {



  document.getElementById("money").innerHTML = ("your money: "+window.money+"\r your best score "+window.bestscore);
  if (stage == 0 && button == 1) {
    document.getElementById("div1").style.width = "126px";
    document.getElementById('main').style.width = "110px";
    document.getElementById('money').style.display = "block";
    document.getElementById('main').style.display = "block";
    document.getElementById('main').innerHTML= "bet ?";
    document.getElementById('input').style.display = "block";
    document.getElementById('input').value = window.bet;
    document.getElementById("button1").innerHTML = "next"
    document.getElementById("button2").style.display = "none"

    stage = 1
  }
  else if (stage == 0 && button == 2){//submit button pressed
    
    document.getElementById('money').style.display = "block";
    document.getElementById('main').style.display = "block";
    document.getElementById('main').innerHTML= "name ?";
    document.getElementById('input').value = name ;
    document.getElementById('input').style.display = "block";
    document.getElementById("button1").innerHTML = "next"
    document.getElementById("button2").style.display = "none"

    stage = "submit";

  }
  else if (stage == 1){
    window.bet = Number(document.getElementById("input").value)
    if (window.bet > window.money || window.bet < 0 || isNaN(window.bet)){
      alert("your bet must be positive number and be below/equal to your money")
      
      stage = 0;
    }
    else{
    document.getElementById('input').style.display = "none";
    document.getElementById('button2').style.display = "inline";
    document.getElementById('button3').style.display = "inline";
    document.getElementById('button2').innerHTML = "2";
    document.getElementById('button1').innerHTML = "1";
    document.getElementById('main').innerHTML = "guess the number";
    stage = 2;
    }
  }
  else if (stage == 2) {
    var number1 = Math.floor(Math.random() * 3) + 1;
    var number2 = button
    if (number1 == number2) {
      

      document.getElementById('main').innerHTML = "you win";

      window.money = window.money + (window.bet*3);

      if (window.money > window.bestscore){window.bestscore=window.money;}

      document.getElementById("money").innerHTML = ("money: "+window.money+"\rbest score:"+window.bestscore );
    }
    else if (number1 != number2) {
      document.getElementById('main').innerHTML = ("you lose <br> the number was "+number1);
      window.money = window.money - window.bet;

      document.getElementById("money").innerHTML = ("money: "+window.money+"\rbest score:"+window.bestscore);
    }

    document.getElementById('button3').style.display = "none";
    document.getElementById('button2').style.display = "block";
    document.getElementById("button2").innerHTML = "submit best score"
    document.getElementById('button1').innerHTML = "play again";

    if (money == 0) {
      alert("game over, are you want play again please refresh page");
      gameover = true;
    }
    stage = 0;
  }
  else if (stage == "submit"){
    window.name = document.getElementById('input').value;
    socket.emit("data1",([window.name , window.bestscore]));
    alert("submitted");
    stage = 0;


  }
}

}
