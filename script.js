// Control de música
const musicBtn = document.getElementById("music-btn");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Activar música";
  } else {
    bgMusic.play();
    musicBtn.textContent = "⏸️ Pausar música";
  }
  isPlaying = !isPlaying;
});

// Contador regresivo con círculos
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-11-15T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "<p>¡Hoy es el gran día!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div class="time-box"><span>${days}</span><label>Días</label></div>
    <div class="time-box"><span>${hours}</span><label>Horas</label></div>
    <div class="time-box"><span>${minutes}</span><label>Minutos</label></div>
    <div class="time-box"><span>${seconds}</span><label>Segundos</label></div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);
