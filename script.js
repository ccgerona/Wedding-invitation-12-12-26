const weddingDate = new Date("2026-12-12T14:00:00+08:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  const element = document.getElementById("countdown");

  if (distance <= 0) {
    element.textContent = "The big day is here! ♡";
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  element.textContent =
    `${days} days · ${hours} hours · ` +
    `${minutes} minutes · ${seconds} seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
