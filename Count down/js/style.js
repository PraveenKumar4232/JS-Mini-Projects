const days= document .querySelector("#days");
const hours= document .querySelector("#hours");
const minutes= document .querySelector("#minutes");
const seconds= document .querySelector("#seconds");
  
 function counter(){

const currentyear=new Date() .getFullYear();
const newyear=new Date(`January 01 ${currentyear+1} 00:00:00`);
// console.log(newyear);

const currentdate=new Date();
// console.log(currentdate);

const diff=newyear-currentdate;
// console.log(diff/1000/60/60/24);

const d=Math.floor(diff/1000/60/60/24);
// console.log(d);

const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
console.log( d+" "+h+" "+m+" "+s);

days.innerHTML=d <10?"0"+d:d;
hours.innerHTML=h <10?"0"+h:h;
minutes.innerHTML=m <10?"0"+m:m;
seconds.innerHTML=s <10?"0"+s:s;

}


setInterval(counter,1000);