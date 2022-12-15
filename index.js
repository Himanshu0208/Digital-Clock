setInterval(() =>{
const d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();

console.log(h);
console.log(m);
console.log(s);

document.getElementById('hour_val').innerText = h;
document.getElementById('minutes_val').innerHTML = m;
document.getElementById('second_val').innerHTML = s;
},1000)