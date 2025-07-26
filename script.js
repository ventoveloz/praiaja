// Função para fechar o popup do sorteio
function fecharPopup() {
  const box = document.getElementById("promoBox");
  if (box) {
    box.style.display = "none";
  }
}

// (Opcional) Abrir o popup automaticamente após alguns segundos
window.addEventListener("load", function () {
  const box = document.getElementById("promoBox");
  if (box) {
    setTimeout(() => {
      box.style.display = "block";
    }, 3000); // mostra após 3 segundos
  }
});
