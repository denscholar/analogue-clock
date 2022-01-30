const hourEl = document.querySelector('.hour');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');

setInterval(() => {
  const date = new Date();
  const secsDegree = date.getSeconds() / 60 * 360 - 90;
  const minsDegree = date.getMinutes() / 60 * 360 - 90;
  const hrsDegree = date.getHours() / 12 * 360 - 90;
  secsEl.style.transform = `rotate(${secsDegree}deg)`;
  minsEl.style.transform = `rotate(${minsDegree}deg)`;
  hourEl.style.transform = `rotate(${hrsDegree}deg)`;
}, 1000);