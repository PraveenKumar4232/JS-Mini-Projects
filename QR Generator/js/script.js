const frm= document.querySelector("#frm");
const output =document .querySelector(".output");
const spinner=document.querySelector(".loader");
const qrcodeElement=document.querySelector("#qrcode");
const btnSave=document.querySelector("#btns");

function generateQR(e){
    e.preventDefault();
    const url=document.querySelector("#url").value;
    const size=document.querySelector("#size").value;
    const clrLight=document.querySelector("#lightcolor").value;
    const clrDark=document.querySelector("#darkcolor").value;

   if (url===""){
    alert("enter your website URL");
   }
   else{
     spinner.style.display='flex';
   
 setTimeout(()=>{
 
    spinner.style.display="none";
    qrcodeElement.innerHTML=" ";
    const qrcode=new QRCode('qrcode',{
        text: url,
        width: size,
        height: size,
        colorDark : clrDark,
        colorLight : clrLight,
        correctLevel : QRCode.CorrectLevel.H
      });
 },1000);

 createDownloadLink();

}}


frm.addEventListener('submit',generateQR);

function createDownloadLink(){
    const imgSrc=qrcodeElement.querySelector('img').src;
    btnSave.href=imgSrc;
}

btnSave.addEventListener('click',()=>{
    setTimeout(()=>{
        btnSave.download='qrcode';
    },50);
});
