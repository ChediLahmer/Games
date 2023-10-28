const start = document.getElementById("start");
const end = document.getElementById("stop");
const reset = document.getElementById("reset");
let num = document.getElementById("clock");
let hour , minutes , seconds;
hour = 0;
minutes =0;
seconds = 0;
let timer = null
num.innerHTML = `00 : 00 : 00` ;
start.addEventListener("click" , () => {
  clocklogic ();
})

end.addEventListener("click" , () => {
  clearTimeout(timer);
})

reset.addEventListener("click" , () => {
  clearTimeout(timer);
  hour = 0;
  minutes =0;
  seconds = 1;
  num.innerHTML = `00 : 00 : 00` ;
})


function clocklogic (){
  if(hour <10) {
    realhour = "0" + hour;
  }else {
    realhour =hour;
  }
  if(minutes <10){
    realminutes = "0" + minutes;
  }else {
    realminutes = minutes;
  }
  if(seconds < 10){
    realseconds = "0"+seconds;
  }else {
    realseconds = seconds;
  }
  num.innerHTML = `${realhour} : ${realminutes} : ${realseconds}` ;
  if(seconds == 59){
    seconds =0;
    minutes++;
  }
  if(minutes == 59){
    minutes = 0;
    hour++;
  }
  if (hour ==24) {
    hour=0;
  }
  seconds++;
  timer = setTimeout(clocklogic , 1000);
}