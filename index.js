const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

setInterval(() =>{
const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

console.log(h);
console.log(m);
console.log(s);

// console.log(today);
document.getElementById('today_val').innerHTML = today;
document.getElementById('hour_val').innerText = h;
document.getElementById('minutes_val').innerHTML = m;
document.getElementById('second_val').innerHTML = s;
},1000)
