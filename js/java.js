// JavaScript para mostrar y ocultar el menú hamburguesa
document.getElementById('icono-hamburguesa').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('menu-activo');
});
