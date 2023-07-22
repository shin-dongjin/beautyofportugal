const clock = document.querySelector('.js-clock');

function getClock() {
  const currentHour = String(new Date().getHours()).padStart(2, '0');
  const currentMinute = String(new Date().getMinutes()).padStart(2, '0');

  clock.innerText = `${currentHour}:${currentMinute}`;
}

getClock();
setInterval(getClock, 1000);
