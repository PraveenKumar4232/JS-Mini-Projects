document.addEventListener("DOMContentLoaded",()=>{

const allborder=document.getElementById("all")
const allvalue=document.getElementById("value")
const container=document.getElementById("container")
const code=document.getElementById("code")
const btncopy=document.getElementById("btncopy")

 var coding='';

function allborderupdate(){

allvalue.innerText=allborder.value+"px";

// coding=`border-radius:${allvalue.innerText}`;
// code.value=coding;

code.value=`border-radius:${allvalue.innerText}`;
container.style.cssText=code.value;
 

}

 
allborder.addEventListener("mousemove",allborderupdate);

allborder.addEventListener("change",allborderupdate);

btncopy.addEventListener("click",()=>{
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("code copied ..");
});



allborderupdate();





})