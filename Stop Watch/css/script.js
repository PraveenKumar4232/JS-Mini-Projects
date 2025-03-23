const btnStart=document.querySelector(".start");
const btnStop=document.querySelector(".stop");
const btnReset=document.querySelector(".reset");

let hrs=min=sec=ms=0,Set,print;

btnStart.addEventListener("click",()=>{

btnStart.classList.add("start-active");
btnStop.classList.remove("stop-active");


    Set=setInterval(()=>{
    ms++;

    if ( ms==100){
        sec++;
        ms=0;
    }

    if( sec==60){
        min++;
        sec=0;
    }

    if(min==60){
        hrs++;
        min=0;
    } 
    UpdateTimer();

    },10)    
})

btnStop.addEventListener("click",()=>{
    
    btnStart.classList.remove("start-active");
    btnStop.classList.add("stop-active");
    clearInterval(Set);
    UpdateTimer();
})

btnReset.addEventListener("click",()=>{
    btnStart.classList.remove("start-active");
    btnStop.classList.remove("stop-active");
    btnReset.classList.add("start-active")    
    
    hrs=min=sec=ms=0;
    UpdateTimer();
})

function UpdateTimer(){
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

    document.querySelector(".hrs").innerText=phrs;
    document.querySelector(".min").innerText=pmin;
    document.querySelector(".sec").innerText=psec;
    document.querySelector(".ms").innerText=pms;
}