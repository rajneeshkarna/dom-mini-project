const wrapper = document.querySelector('.wrapper');
wrapper.style= 'display: flex; flex-direction: column; width: 60%; height: 60vh; background: green; color: white; margin: 60px auto';
const firstHeading = document.querySelector('h1');
firstHeading.innerHTML = firstHeading.innerHTML.replace('2020', '<span id = "year">2020</span>');
const year = document.getElementById('year');
year.style = 'color: yellow; background: black; padding: 3px 9px; border-radius: 3px';
