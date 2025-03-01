const OutputScreen = document.getElementById("output");

function display(num){
    OutputScreen.value =OutputScreen.value + num;
}

function Calculate(){
   
   try{
    OutputScreen.value=eval(OutputScreen.value);
   }
   catch(err){
    alert("invaid calculation or invalid input sorry for the inconvenience please check your inputs ")
   }
}

function Clear(){
    OutputScreen.value = " " ;
}
function del(){
    OutputScreen.value=OutputScreen.value.slice(0,-1);
}
