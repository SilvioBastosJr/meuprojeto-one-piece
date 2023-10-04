let botoes = document.querySelectorAll(".botao");
let personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado")

    });
});
function desselecionarBotao() {
    let botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem() {
    let personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}