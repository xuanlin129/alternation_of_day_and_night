const themeToggle = document.querySelector('#theme')
const bg = document.querySelector('.bg')
const cloudsLeft = document.querySelector('.clouds-left')
const cloudsRight = document.querySelector('.clouds-right')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode')
  bg.classList.toggle('rotate')
  cloudsLeft.classList.toggle('clouds-left-visible')
  cloudsRight.classList.toggle('clouds-right-visible')
  sun.classList.toggle('non-visible')
  moon.classList.toggle('non-visible')
})

// let dotSmall = document.querySelector('.dot-s');
// let dotLarge = document.querySelector('.dot-l');
// document.addEventListener("mousemove", function (e) {

//   dotSmall.style.left = e.pageX + "px";
//   dotSmall.style.top = e.pageY - window.scrollY + "px";
//   dotLarge.style.left = e.pageX + "px";
//   dotLarge.style.top = e.pageY - window.scrollY + "px";
// });
