document.addEventListener('DOMContentLoaded', function() {
  // Función para activar/desactivar el menú hamburguesa
  document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let visitCount = localStorage.getItem("visitCount") || 0;
  document.getElementById("visitCount").textContent = visitCount;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
});