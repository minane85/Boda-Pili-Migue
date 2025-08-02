const targetDate = new Date('2025-10-25T12:00:00').getTime();
    const counter = document.getElementById('counter');
    function updateCountdown() {
      const now = Date.now();
      const distance = targetDate - now;
      if (distance < 0) {
        counter.textContent = '¡Hoy nos casamos!';
        return;
      }
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      counter.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    function toggleAudio() {
      const audio = document.getElementById('bodaAudio');
      if (audio.paused) {
        audio.play();
        document.getElementById('audioBtn').textContent = '⏸️ Música';
      } else {
        audio.pause();
        document.getElementById('audioBtn').textContent = '🎵 Música';
      }
    }

    window.addEventListener('DOMContentLoaded', () => {
      const audio = document.getElementById('bodaAudio');
      audio.volume = 1;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setTimeout(() => {
          audio.volume = 1;
        }, 1000));
      }
    });

    function toggleMenu(button) {
      const navLinks = document.getElementById('nav-menu');
      navLinks.classList.toggle('show');
      button.classList.toggle('open');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navLinks.classList.remove('show');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
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
	