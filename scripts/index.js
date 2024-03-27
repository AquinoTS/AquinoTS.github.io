const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

const colorMode = document.getElementById('color-mode');
const body = document.body; // Corrigindo o seletor para document.body

colorMode.addEventListener('change', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('white-mode');
    document.documentElement.style.setProperty('--text-color', '#343d48'); // Define a cor do texto para o modo claro
    document.documentElement.style.setProperty('--light-tertiary-color', '#af737828'); // Define a cor do light-tertiary-color para o modo claro
    document.querySelector('.element-with-blur-effect').style.filter = 'none'; // Remova o efeito de desfoque no elemento específico
  } else {
    body.classList.remove('white-mode');
    body.classList.add('dark-mode');
    document.documentElement.style.setProperty('--text-color', '#ffffff'); // Define a cor do texto para o modo escuro
    document.documentElement.style.setProperty('--light-tertiary-color', '#00000029'); // Define a cor do light-tertiary-color para o modo escuro
    document.querySelector('.element-with-blur-effect').style.filter = 'blur(4px)'; // Adicione um efeito de desfoque de 4px no elemento específico
  }
});