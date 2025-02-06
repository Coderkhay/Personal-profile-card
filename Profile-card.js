let time = document.getElementById("currentTime");

let x = new Date();
let y = x.toLocaleString();
// let y = x.toLocaleString([], {
//   hour: "2-digit",
//   minute: "2-digit",
// });
time.innerText = y;

console.log(x.toLocaleString());
