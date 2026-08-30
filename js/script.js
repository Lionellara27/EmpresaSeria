// Esperamos a que todo el HTML cargue antes de ejecutar el aura
document.addEventListener('DOMContentLoaded', () => {
    
    // Easter Egg en consola para el profesor
    console.log("%c⚡ Sistema de Farmeo de Aura inicializado...", "color: #00ffff; font-size: 16px; font-weight: bold;");
    console.log("%cAura detectada: Nivel Chad. Todo listo para maximizar presencia.", "color: #b366ff; font-size: 14px;");

    // 1. Efecto moderno para la barra de navegación (Header)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Cuando el usuario baja, le damos un fondo oscuro y sombra de aura
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.98)'; 
            header.style.boxShadow = '0 4px 15px rgba(0, 255, 255, 0.2)'; 
            header.style.padding = '10px 50px'; // Lo hacemos más angosto
            header.style.transition = 'all 0.3s ease';
        } else {
            // Al volver arriba, vuelve al estado inicial
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            header.style.boxShadow = 'none';
            header.style.padding = '15px 50px';
        }
    });

    // 2. Validación de Formulario en Contacto (Humor NPC)
    const formulario = document.querySelector('form');
    
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            // Prevenimos el envío real para validar los campos
            evento.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación simple
            if (nombre.trim() === '' || mensaje.trim() === '') {
                alert("⚠️ ¡Error de Aura! Un verdadero Main Character no deja campos vacíos. Completá todo para subir de nivel.");
            } else {
                alert(`✅ Solicitud enviada, ${nombre}. Evaluaremos tu nivel de NPC a la brevedad.`);
                // Acá iría la lógica para enviar el formulario (ej. formulario.submit())
                formulario.reset(); // Limpiamos los campos
            }
        });
    }

    // 3. Base para el carrusel obligatorio del Home
    const iniciarCarrusel = () => {
        const heroSection = document.getElementById('hero');
        if(heroSection) {
            console.log("Preparando imágenes de presentación del equipo y servicios...");
            // Aquí iría la lógica avanzada para pasar las fotos (Next/Prev)
        }
    };

    iniciarCarrusel();
});