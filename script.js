var textInput = document.querySelector("#input-texto");
var textOutput = document.querySelector("#resultado");


function criptografar() {
    var texto = textInput.value;
    //criptografia
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    // trocar elementos do resultado pela criptografia + botao copiar
    document.getElementById('resultado').innerHTML = '<textarea readonly id="input-texto2">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

function descriptografar() {
    var texto = textInput.value;

    // descriptografia
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
    // trocar elementos do resultado pela descriptografia + botao copiar
    document.getElementById('resultado').innerHTML = '<textarea readonly id="input-texto2">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'

}

// botão copiar
function copiar() {
    var textoCop = document.getElementById('input-texto2');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}    