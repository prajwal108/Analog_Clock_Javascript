let hourHand=document.getElementById('hourHand');
let minHand = document.getElementById('minHand');
let secHand = document.getElementById('secHand');
let audioElement = new Audio(`audio/Clock.mp3`);
let day = document.getElementById('day');
let month = document.getElementById('month');
let myDate = document.getElementById('myDate');
let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

setInterval(()=>{
let d= new Date();
let htime = d.getHours();
let mtime = d.getMinutes();
let stime = d.getSeconds();
let h_rot = 30*htime + (mtime/2) + (stime/120);
let m_rot = 6*mtime + (stime/100);
let s_rot = 6*stime;
hourHand.style.transform=`rotate(${h_rot}deg)`;
minHand.style.transform=`rotate(${m_rot}deg)`;
secHand.style.transform=`rotate(${s_rot}deg)`;
audioElement.play();
day.innerHTML= days[d.getDay()];
month.innerHTML=months[d.getMonth()];
myDate.innerHTML=d.getDate();
},1000);
