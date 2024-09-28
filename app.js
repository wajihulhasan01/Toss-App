let btn1 = document.querySelector("#head")
let btn2 = document.querySelector("#tail")
let result = document.querySelector("#result")
let img = document.querySelector("#img")
let num;
function  toss (coin){
  num = Math.ceil(Math.random(num)*2)
  if(coin===1 && num===1 || coin === 2 && num === 2)
  {
    result.innerHTML="You win the toss"
    console.log("you win");
    
    
  }
  else {
    result.innerHTML="You loss"
    console.log("you loss");
    
  }
  if(num===1){
    img.src ="head.png"
  }
  else{
    img.src="tails.png"
  }
}
