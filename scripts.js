// Ejemplo de interacción con el menú: cambiar clase activa en los links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});

