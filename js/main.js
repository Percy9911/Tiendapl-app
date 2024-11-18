// Espera a que el DOM se cargue completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
    
    // Validación del formulario de autenticación
    const authForm = document.querySelector("#authModal form");

    authForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario si está incompleto

        // Obtiene los valores de los campos de entrada
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        // Validación básica: asegúrate de que los campos no estén vacíos
        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
        } else {
            alert("Iniciando sesión..."); 
            // Aquí puedes agregar lógica para autenticación real o redireccionamiento
        }
    });
    
    // Efecto de scroll suave para enlaces de la barra de navegación
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Evita que el enlace recargue la página
            event.preventDefault();
            
            // Obtiene el destino del enlace
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Realiza un scroll suave hasta la sección objetivo
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    
});

