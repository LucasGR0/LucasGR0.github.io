const formulario = document.querySelector('#login-form'); // Selector del formulario
const nombreDeUsuario = "lucas";
const LaContraseña = "123456";

formulario.onsubmit = function loginUsuario(evento) {
    evento.preventDefault(); // Evita el envío del formulario por defecto

    const Usuario = document.querySelector('#usuario').value; // Valor del campo usuario
    const Contraseña = document.querySelector('#contrasena').value; // Valor del campo contraseña
    console.log(Usuario, Contraseña); // Muestra usuario y contraseña en la consola

    if (nombreDeUsuario === Usuario && LaContraseña === Contraseña) {
        alert("Bienvenido");
        window.location.href = "cargaDeProductos.html"; // Redirige a otra página (cámbialo por la página correcta)
    } else {
        alert("Usuario y/o contraseña incorrectos");
    }

}
