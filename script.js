let slideAtual = 0;
const slides = document.querySelectorAll(".slide");

// Exibe o slide atual
function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Muda para o próximo ou anterior
function mudarSlide(direcao) {
  slideAtual += direcao;

  if (slideAtual >= slides.length) {
    slideAtual = 0;
  } else if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  mostrarSlide(slideAtual);
}

// ⏱️ Função automática a cada 5 segundos
setInterval(() => {
  mudarSlide(1);
}, 7000); // 5000 ms = 5 segundos
