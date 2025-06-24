function validarDatos(event) {
  // Prevent form submission and page reload
  event.preventDefault();
  
  // Get the values ​​from the form
  let nombre = document.getElementById('nombre').value;
  let edad = document.getElementById('edad').value;
  

  const nombreValido = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;
  if (!nombreValido.test(nombre)) {
    document.getElementById("resultado").innerHTML = "The name must only contain letters and spaces.";
    document.getElementById("resultado").className = "Error"; // Class for error
    return;  // Stop execution if the name is invalid
  }

  // Validate that age is a number
  if (isNaN(edad) || edad === "") {
    console.error("Error: Age must be a valid number.");
    document.getElementById("resultado").innerHTML = "Please enter a valid age.";
    return;  // Stop execution if not a number
  }

  
  // Convert age to number
  edad = Number(edad);
  
  // Validate age and display message
  let mensaje;
  if (edad < 18) {
    mensaje = `¡Hello, ${nombre}! you are a minor, !Keep learning and enjoying the code!`;
  } else {
    mensaje = `¡Hello, ${nombre}! You're of legal age, prepare yourself for great opportunities in the world of programming!`;
  }

  // Display the message on the page
  document.getElementById("resultado").innerHTML = mensaje;

  // Clear form fields
  document.getElementById('nombre').value = '';
  document.getElementById('edad').value = '';
}
