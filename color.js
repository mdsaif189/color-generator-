// let para = document.querySelector("#para");
// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");
// ("body");

// function color () {
//   const random = Math.floor(Math.random()*16777215).toString(16); 
//   const hexa = "#" + random;
//   body.style.backgroundColor = hexa;
//   para.innerHTML = hexa;
//   para.style.color = hexa;
//   btn.style.backgroundColor = hexa;
//   navigator.clipboard.writeText(hexa);
  
// };



// btn.addEventListener("click",() => {
//   color();
  
  
// });

let otp= Math.floor(Math.random()*1000000).toString().padStart(6,'0');
console.log(otp);