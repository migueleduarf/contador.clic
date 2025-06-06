document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const elementoContador = document.getElementById('contador');
    const botao = document.getElementById('botao');
    const botaoReset = document.getElementById('reset');
    const mensagem = document.getElementById('mensagem');
    
    // Variável de estado
    let contador = 0;

    // Função para atualizar o contador
    function atualizarContador() {
        elementoContador.textContent = contador;
        
        // Animação
        elementoContador.style.transform = 'scale(1.1)';
        setTimeout(() => {
            elementoContador.style.transform = 'scale(1)';
        }, 200);
        
        // Mudança de cor de fundo
        const hue = (contador * 5) % 360;
        document.body.style.background = `
            linear-gradient(135deg, 
            hsl(${hue}, 70%, 50%), 
            hsl(${(hue + 30) % 360}, 70%, 50%)
        `;
        
        // Mensagens especiais
        atualizarMensagem();
    }

    // Função para atualizar mensagens
    function atualizarMensagem() {
        if (contador === 0) {
            mensagem.textContent = "";
            return;
        }
        
        const mensagens = {
            10: "Você está indo bem! Continue!",
            25: "Uau! Você é rápido!",
            50: "Incrível! Metade do caminho para 100!",
            100: "CENTENÁRIO! Você atingiu 100 cliques!"
        };
        
        if (mensagens[contador]) {
            mensagem.textContent = mensagens[contador];
        } else if (contador > 100 && contador % 100 === 0) {
            mensagem.textContent = `Inacreditável! ${contador} cliques!`;
        } else if (contador > 0 && contador % 25 === 0) {
            mensagem.textContent = `Bom trabalho! ${contador} cliques!`;
        }
    }

    // Evento de clique no botão principal
    botao.addEventListener('click', function(e) {
        contador++;
        atualizarContador();
        criarEfeitoRipple(e, this);
    });

    // Evento de clique no botão de reset
    botaoReset.addEventListener('click', function() {
        if (contador > 0) {
            const confirmacao = confirm(`Você tem ${contador} cliques. Tem certeza que quer resetar?`);
            if (confirmacao) {
                contador = 0;
                atualizarContador();
                mostrarMensagemTemporaria("Contador resetado com sucesso!");
            }
        }
    });

    // Função para criar efeito ripple
    function criarEfeitoRipple(event, element) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size/2;
        const y = event.clientY - rect.top - size/2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Função para mostrar mensagem temporária
    function mostrarMensagemTemporaria(texto) {
        mensagem.textContent = texto;
        setTimeout(() => {
            if (contador === 0) {
                mensagem.textContent = "";
            }
        }, 2000);
    }
});
