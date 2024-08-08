document.addEventListener('DOMContentLoaded', function() {
    alert("Bem-vindo ao site sobre Tecnologia na Agricultura!");
});

function mostrarOpcoes(id) {
    var opcoes = document.getElementById(id);
    if (opcoes.style.display === "none" || opcoes.style.display === "") {
        opcoes.style.display = "block";
    } else {
        opcoes.style.display = "none";
    }
}

function verificarResposta(element, idResposta) {
    var respostaCorreta = document.getElementById(idResposta);
    var todasRespostas = document.querySelectorAll('.resposta');

    todasRespostas.forEach(function(resposta) {
        resposta.style.display = "none";
    });

    respostaCorreta.style.display = "block";

    var opcoes = element.parentElement;
    opcoes.style.display = "none";
}
