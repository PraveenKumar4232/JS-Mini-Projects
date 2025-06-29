const frm = document.querySelector("#frm");
const output = document.querySelector(".output");
const spinner = document.querySelector(".loader");
const qrcodeElement = document.querySelector("#qrcode");
const btnSave = document.querySelector("#btns");

function generateQR(e) {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  const clrLight = document.querySelector("#lightcolor").value;
  const clrDark = document.querySelector("#darkcolor").value;

  if (url === "") {
    alert("enter your website URL");
  } else {
    spinner.style.display = "flex";

    setTimeout(() => {
      spinner.style.display = "none";
      qrcodeElement.innerHTML = " ";
      // this will automatically injects (replace) the qr object(image data) to the "qrcode" class id
      const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark: clrDark,
        colorLight: clrLight,
        correctLevel: QRCode.CorrectLevel.H,
      });

      setTimeout(() => {
        createDownloadLink();
      }, 100);
    }, 3000);

    // createDownloadLink(); this will execute before qr generated
  }
}

frm.addEventListener("submit", generateQR);

function createDownloadLink() {
  const imgSrc = qrcodeElement.querySelector("img").src;
  console.log(imgSrc);
  btnSave.href = imgSrc;
}

btnSave.addEventListener("click", downloadQR);

function downloadQR() {
  alert("image is downloading..");
  btnSave.download = "qrcode";
}
