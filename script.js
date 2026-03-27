// WhatsApp
function chamarWhats() {
  let numero = "5543984046323"; // seu número
  let msg = "Olá! Gostaria de um orçamento.";

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(msg)}`);
}

// ANIMAÇÃO AO SCROLL
let elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elementos.forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});