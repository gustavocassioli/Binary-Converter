function converterParaDecimal() {
    var numeroDecimal = parseInt(document.getElementById('decimal').value);
    var binario = numeroDecimal.toString(2);

    document.getElementById('resultadoDecimal').innerHTML = "O resultado em binário é: " + binario;
}

function converter() {
    var binario = document.getElementById('binario').value;
    var decimal = parseInt(binario, 2);
    var caractere = String.fromCharCode(decimal);

    document.getElementById('resultado').innerHTML = "O resultado em ASCII é: " + caractere + " (Código Decimal: " + decimal + ")";
}
function converterParaBinario() {
    var texto = document.getElementById('texto').value;
    var binario = '';

    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        var binarioChar = charCode.toString(2).padStart(8, '0');
        binario += binarioChar + ' ';
    }

    document.getElementById('resultadoBinario').innerHTML = "O resultado em binário é: " + binario.trim();
}
