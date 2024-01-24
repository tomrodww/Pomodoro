let darkMode = true;
const buttonToggleDarkAndLightMode = document.getElementById('toggle-mode');

buttonToggleDarkAndLightMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');
  const mode = darkMode ? 'light' : 'dark';
  event.currentTarget.querySelector('span').textContent = `${mode} mode on`;

  darkMode = !darkMode

})
