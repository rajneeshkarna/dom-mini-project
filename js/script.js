const wrapper = document.querySelector('.wrapper');
wrapper.style= 'display: flex; flex-direction: column; width: 75%; height: 80vh; background-color: rgb(63, 201, 192); color: black; margin: 60px auto; padding: 0px 36px';
const firstHeading = document.querySelector('h1');
firstHeading.innerHTML = firstHeading.innerHTML.replace('2020', '<span id = "year">2020</span>');
const year = document.getElementById('year');
// year.style = `color: ${changeColor()}; background: gray; padding: 3px 9px; border-radius: 3px`;
function changeColor(){
  let arr = [];
  for(let i = 0; i < 3; i++){
    let random = Math.floor(Math.random() * 256);
    arr.push(random);
}
let color = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
return year.style = `color: ${color}; padding: 3px 9px; border-radius: 3px; font-size: 60px; font-weight: 900`; 
}

const title = document.querySelector('h1');
title.style = 'text-align: center; font-size: 42px; margin: 18px auto'

const headingTwo = document.querySelector('h2');
headingTwo.style = 'text-align: center; text-decoration: underline; margin-bottom: 16px'

setInterval(changeColor, 1000);

const unordered = document.querySelector('ul');

const fullDateTime = new Date();
const newDate = document.createElement('p');
let thisYear = fullDateTime.getFullYear();
let month = fullDateTime.getMonth();
let date = fullDateTime.getDate();
let day = fullDateTime.getDay();
let hours = fullDateTime.getHours();
let minutes = fullDateTime.getMinutes();
let seconds = fullDateTime.getSeconds();

switch(month) {
  case 0:
  month = 'Jan';
  break
  case 1:
  month = 'Feb';
  break
  case 2:
  month = 'Mar';
  break
  case 3:
  month = 'Apr';
  break
  case 4:
  month = 'May';
  break
  case 5:
  month = 'Jun';
  break
  case 6:
  month = 'Jul';
  break
  case 7:
  month = 'Aug';
  break
  case 8:
  month = 'Sep';
  break
  case 9:
  month = 'Oct';
  break
  case 10:
  month = 'Nov';
  break
  case 11:
  month = 'Dec';
  break
}

switch(day) {
  case 1:
  day = 'Mon';
  break
  case 2:
  day = 'Tue';
  break
  case 3:
  day = 'Wed';
  break
  case 4:
  day = 'Thu';
  break
  case 5:
  day = 'Fri';
  break
  case 6:
  day = 'Sat';
  break
  case 7:
  day = 'Sun'
  break
}
newDate.innerText = `${day} ${month} ${date } ${thisYear} ${hours} : ${minutes} : ${seconds}`;
newDate.id = 'date';
wrapper.appendChild(newDate);
wrapper.insertBefore(newDate, unordered);

function changeColorDate(){
  let arr = [];
  for(let i = 0; i < 3; i++){
    let random = Math.floor(Math.random() * 256);
    arr.push(random);
}
let color = `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
return newDate.style = `background: ${color}; padding: 3px 9px; border-radius: 3px; font-size: 18px; color: white; margin: 12px auto; text-align: center`; 
}

setInterval(changeColorDate, 1000);

const list = document.querySelectorAll('li');

list.forEach((element) => {
  element.style = 'padding: 5px 9px; margin: 3px; list-style: none; width: 100%; color: white; font-size: 18px';
  if(element.innerText.includes('Challenge Done')) {
    element.style.background = 'green';
  }
  else if(element.innerText.includes('Challenge Ongoing')) {
    element.style.background
     = 'yellow';
     element.style.color = 'black';
  }
  else if(element.innerText.includes('Challenge Coming')) {
    element.style.background = 'red';
  }
});

