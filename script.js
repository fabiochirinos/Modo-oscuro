const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const DOMslider = document.querySelector('#slider');

const setTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

DOMslider.addEventListener('click', () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);