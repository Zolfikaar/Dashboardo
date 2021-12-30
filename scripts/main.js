let list = document.querySelectorAll('.navigation li');

// add hovered class in selected list item
function activeLink() {
  list.forEach((item) => item.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let close = document.querySelector('.toggle ion-icon[name="close"]');
let menu = document.querySelector('.toggle ion-icon[name="menu"]');

// Menu Toggle
toggle.onclick = function() {
  navigation.classList.toggle('active');
  main.classList.toggle('active');

  if(navigation.classList.contains('active')) {
    menu.style.display = 'none';
    close.style.display = 'block';
  } else {
    menu.style.display = 'block';
    close.style.display = 'none';
  }
}