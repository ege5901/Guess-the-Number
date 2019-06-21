var stage = 0;
var money = Number(10);
var bet

document.getElementById('main').style.width = "300px";


function buttonclick() {
  document.getElementById("money").innerHTML = ("your money: "+window.money);
  if (stage == 0) {
    document.getElementById("div1").style.width = "120px";
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
    console.log(number1);
    console.log(button);
    console.log(number2);
    console.log(window.money);
    console.log(typeof(window.money));
    console.log(window.bet);
    console.log(typeof(window.bet));
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
    console.log(window.money);
    console.log(typeof(window.money));

    document.getElementById('button2').style.display = "none";
    document.getElementById('button3').style.display = "none";
    document.getElementById('button1').innerHTML = "play again"
    stage = 0
  }

}
