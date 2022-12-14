const id = (id) => document.getElementById(id)
const menuIcon = id('menu--icon')

const displayNav = document.querySelector('.display--nav')
let display = false;

menuIcon.addEventListener('click', function () {

  if (display === false) {
    displayNav.classList.add('display--nav_up')
    display = true;
  } else {
    displayNav.classList.remove('display--nav_up')
    display = false;
  }

})