function validateForm(event) {
    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    // Comprobar si los campos están vacíos
    if (name === "" || email === "") {
        alert('Por favor, completa todos los campos.');
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        alert('¡Pronto seras contactado!');
    }
  }
  
  // Espera que el DOM esté completamente cargado antes de añadir el evento
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', validateForm);
  });