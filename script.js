let contador = 0;

const btnClique = document.getElementById("botaoClique");
const btnResetar = document.getElementById("resetar");
const divContador = document.getElementById("contador");

btnClique.addEventListener("click", () => {
  contador++;
  divContador.textContent = contador;
});

btnResetar.addEventListener("click", () => {
  contador = 0;
  divContador.textContent = contador;
});

