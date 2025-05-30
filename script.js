let contador = 0;

document.getElementById("botaoClique").addEventListener("click", () => {
  contador++;
  document.getElementById("contador").textContent = contador;
});

