const wrapper = document.querySelector('.wrapper');
wrapper.style= 'display: flex; flex-direction: column; width: 60%; height: 60vh; background: green; color: white; margin: 60px auto';
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
return year.style = `color: ${color}; padding: 3px 9px; border-radius: 3px; font-size: 42px`; 
}

setInterval(changeColor, 500);