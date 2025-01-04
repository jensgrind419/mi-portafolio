// Modal de imágenes
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");

// Abrir modal al hacer clic en una imagen
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Cerrar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Botón "Ir al Principio"
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    if (name.value.trim() === '') {
        showError(name, 'Por favor, introduce tu nombre.');
        isValid = false;
    } else {
        clearError(name);
    }

    if (!validateEmail(email.value)) {
        showError(email, 'Por favor, introduce un correo válido.');
        isValid = false;
    } else {
        clearError(email);
    }

    if (message.value.trim() === '') {
        showError(message, 'Por favor, escribe un mensaje.');
        isValid = false;
    } else {
        clearError(message);
    }

    if (isValid) {
        alert('Formulario enviado exitosamente.');
        this.reset();
    }
});

function showError(input, message) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    input.classList.add('error');
}

function clearError(input) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.style.display = 'none';
    input.classList.remove('error');
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}