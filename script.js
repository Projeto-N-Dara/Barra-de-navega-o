let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
const intervalTempo = 5000; // 5 segundos
const progressContainer = document.querySelector(".progress-indicators");
let progressFills = [];
let timer;

function criarIndicadores() {
  for (let i = 0; i < slides.length; i++) {
    const indicador = document.createElement("div");
    indicador.classList.add("progress-indicator");

    const fill = document.createElement("div");
    fill.classList.add("progress-fill");

    indicador.appendChild(fill);
    progressContainer.appendChild(indicador);
    progressFills.push(fill);
  }
}

function resetarProgressos() {
  progressFills.forEach(fill => {
    fill.style.transition = "none";
    fill.style.width = "0%";
    // Força reflow para resetar a transição
    void fill.offsetWidth;
    fill.style.transition = `width ${intervalTempo}ms linear`;
  });
}

function preencherProgresso(index) {
  progressFills[index].style.width = "100%";
}

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });

  resetarProgressos();
  preencherProgresso(index);
}

function mudarSlide(direcao) {
  slideAtual += direcao;
  if (slideAtual >= slides.length) slideAtual = 0;
  if (slideAtual < 0) slideAtual = slides.length - 1;

  mostrarSlide(slideAtual);
  reiniciarTimer();
}

function avancarSlide() {
  mudarSlide(1);
}

function reiniciarTimer() {
  clearInterval(timer);
  timer = setInterval(avancarSlide, intervalTempo);
}

criarIndicadores();
mostrarSlide(slideAtual);
reiniciarTimer();
