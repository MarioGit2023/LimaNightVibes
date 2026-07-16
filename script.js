document.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.bg-zinc-800');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Efecto neon pulsante en el título
setInterval(() => {
  const neon = document.querySelector('.neon-text');
  if (neon) neon.style.textShadow = '0 0 15px #ff00ff, 0 0 30px #ff00ff';
}, 1500);