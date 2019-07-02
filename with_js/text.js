var stage = 0;
var money = Number(10);
var bet;
var h = false;
document.getElementById('main').style.width = "278px";


function buttonclick() {

  if (h) {
    alert("please refresh")

  } else {



  document.getElementById("money").innerHTML = ("your money: "+window.money);
  if (stage == 0) {
    document.getElementById("div1").style.width = "115px";
    document.getElementById('main').style.width = "100px";
    document.getElementById('money').style.display = "block";
    document.getElementById('main').style.display = "block";
    document.getElementById('main').innerHTML= "bet ?";
    document.getElementById('input').style.display = "block";
    document.getElementById("button1").innerHTML = "next"
    stage = 1
  }
  else if (stage == 1){
    window.bet = Number(document.getElementById("input").value)
    if (window.bet > window.money || window.bet < 0 || isNaN(window.bet)){
      alert("error, please refresh page")
      h = true;
    }
    document.getElementById('input').style.display = "none";
    document.getElementById('button2').style.display = "inline";
    document.getElementById('button3').style.display = "inline";
    document.getElementById('button1').innerHTML = "1";
    document.getElementById('main').innerHTML = "guess the number";
    stage = 2
  }
  else if (stage == 2) {
    var number1 = Math.floor(Math.random() * 3) + 1;
    var number2 = button
    if (number1 == number2) {
      document.getElementById('main').innerHTML = "you win";

      window.money = window.money + (window.bet*3);

      document.getElementById("money").innerHTML = ("money: "+window.money);
    }
    else if (number1 != number2) {
      document.getElementById('main').innerHTML = ("you lose <br> the number was "+number1);
      window.money = window.money - window.bet;

      document.getElementById("money").innerHTML = ("money: "+window.money);
    }

    document.getElementById('button2').style.display = "none";
    document.getElementById('button3').style.display = "none";
    document.getElementById('button1').innerHTML = "play again";

    if (money == 0) {
      alert("game over, are you want play again please refresh page");
      h = true;
    }
    stage = 0;
  }
}

}
