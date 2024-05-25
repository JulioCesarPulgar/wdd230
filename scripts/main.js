document.addEventListener('DOMContentLoaded', () => {
  // Función para activar/desactivar el menú hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Función para contar las visitas
  let visitCount = localStorage.getItem("visitCount") || 0;
  const visitCountElement = document.getElementById("visitCount");

  visitCountElement.textContent = visitCount;
  visitCount++;

  localStorage.setItem("visitCount", visitCount);
});