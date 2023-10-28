const list = ["rock" , "paper" , "scissor"];

const listemjois = ["✊", "✋", "✌️"];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener("click" ,() => result("rock"));
paper.addEventListener("click" , () => result("paper"));
scissor.addEventListener("click" , () => result("scissor"));

function result (playerchoice){
  let index =Math.floor(Math.random()*3);
  document.getElementById("pcomp").textContent = listemjois[index];
  let pindex = list.indexOf(playerchoice);
  document.getElementById("pplayer").textContent = listemjois[pindex];
  document.querySelector("h1").textContent =  winlogic (playerchoice , list[index] );
}
function winlogic (player , computer ){
  if(computer =="paper" && player == "rock"){
    return "you lose";
  }else if (computer =="rock" && player == "scissor"){
    return "you lose";
  }
  else if (computer =="scissor" && player == "paper"){
    return "you lose";
  }else if (computer == player){
    return "draw";
  }else {
    return "you win";
  }
}