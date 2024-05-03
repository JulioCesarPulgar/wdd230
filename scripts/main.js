document.addEventListener('DOMContentLoaded', function() {
  // Función para activar/desactivar el menú hamburguesa
  document.querySelector('.hamburger').addEventListener('click', function() {
      document.querySelector('nav ul').classList.toggle('active');
  });
});
