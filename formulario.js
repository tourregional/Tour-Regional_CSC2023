const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  const mensaje = `¡Gracias por registrarte, ${nombre}! Nos pondremos en contacto contigo al correo ${email} o al teléfono ${telefono}.`;
  alert(mensaje);
  
});
