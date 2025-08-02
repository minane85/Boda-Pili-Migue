// === Cuenta atrás ===
const targetDate = new Date('2025-10-25T12:00:00').getTime();
const counter = document.getElementById('counter');

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance < 0) {
    counter.textContent = '¡Llegó el gran día!';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counter.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// === Inicialización cuando todo esté listo ===
window.addEventListener('DOMContentLoaded', () => {
  // Reproducir música automáticamente
  const audio = document.getElementById('bodaAudio');
  if (audio) {
    audio.volume = 1;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Silencio automático si no se puede reproducir
      });
    }
  }

  // Iniciar cuenta atrás
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Iniciar Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  });

  // Menú hamburguesa
  const navLinks = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('open');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
