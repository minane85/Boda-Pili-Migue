document.addEventListener('DOMContentLoaded', () => {
  // Audio toggle con aria-pressed
  const audio = document.getElementById('bodaAudio');
  const audioBtn = document.getElementById('audioBtn');
  audio.volume = 1;
  audioBtn.setAttribute('aria-pressed', String(!audio.paused));
  audioBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      audioBtn.textContent = '⏸️ Música';
      audioBtn.setAttribute('aria-pressed', 'true');
    } else {
      audio.pause();
      audioBtn.textContent = '🎵 Música';
      audioBtn.setAttribute('aria-pressed', 'false');
    }
  });

  // Cuenta atrás
  const counter = document.getElementById('counter');
  const targetTime = new Date('2025-10-25T12:00:00').getTime();

  function updateCountdown() {
    const now = Date.now();
    const diff = targetTime - now;
    if (diff <= 0) {
      counter.textContent = '¡Hoy nos casamos!';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    counter.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Menú hamburguesa
  const menuBtn = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');

  function closeMenu() {
    navMenu.classList.remove('show');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar al clicar fuera y con Escape
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // Inicializar Swiper
  new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});
