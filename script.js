// Variáveis globais
let contador = 0;
const elementoContador = document.getElementById('contador');
const botao = document.getElementById('botao');
const botaoReset = document.getElementById('reset');
const mensagem = document.getElementById('mensagem');

// Função para atualizar o contador
function atualizarContador() {
    elementoContador.textContent = contador;
    elementoContador.style.transform = 'scale(1.1)';
    setTimeout(() => {
        elementoContador.style.transform = 'scale(1)';
    }, 200);
    
    // Mudar cor do background conforme a contagem
    const hue = (contador * 5) % 360;
    document.body.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${(hue + 30) % 360}, 70%, 50%)`;
    
    // Mensagens especiais
    if (contador === 10) {
        mensagem.textContent = "Você está indo bem! Continue!";
    } else if (contador === 25) {
        mensagem.textContent = "Uau! Você é rápido!";
    } else if (contador === 50) {
        mensagem.textContent = "Incrível! Metade do caminho para 100!";
    } else if (contador === 100) {
        mensagem.textContent = "CENTENÁRIO! Você atingiu 100 cliques!";
    } else if (contador > 100 && contador % 100 === 0) {
        mensagemador = 0;

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

 textContent = `Inacreditável! ${contador} cliques!`;
    } else if (contador > 0 && contador % 25 === 0) {
        mensagem.textContent = `Bom trabalho! ${contador} cliques!`;
    }
}

// Evento de clique no botão principal
botao.addEventListener('click', function() {
    contador++;
    atualizarContador();
    
    // Efeito visual no botão
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1) translateY(-5px)';
    }, 100);
});

// Evento de clique no botão de reset
botaoReset.addEventListener('click', function() {
    if (contador > 0) {
        const confirmacao = confirm(`Você tem ${contador} cliques. Tem certeza que quer resetar?`);
        if (confirmacao) {
            contador = 0;
            atualizarContador();
            mensagem.textContent = "Contador resetado com sucesso!";
            setTimeout(() => {
                mensagem.textContent = "";
            }, 2000);
        }
    }
});

// Efeito de ripple para o botão de clique
botao.addEventListener('mousedown', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
});
