document.addEventListener(
 "DOMContentLoaded",
 function() {
  // Seleciona todas as barras de progresso e textos de progresso
  let progressBars = document
   .querySelectorAll(".progress-bar");
  let progressTexts = document
   .querySelectorAll(
    ".progress-text");

  function updateProgress(bar, text,
   progress) {
   if (progress <= 100) {
    bar.style.width = progress + "%";
    text.textContent = progress + "%";
    setTimeout(function() {
     updateProgress(bar, text,
      progress + 1);
    }, 100); // Atualiza a cada 100ms
   }
  }

  // Itera sobre todas as barras de progresso e textos
  progressBars.forEach((progressBar,
   index) => {
   let progressText = progressTexts[
    index];
   updateProgress(progressBar,
    progressText, 0);
  });
 });
