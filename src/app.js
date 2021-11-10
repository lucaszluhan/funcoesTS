"use strict";
var acessoAoSite = function () {
    alert('Bem-vindo ao site.');
};
acessoAoSite();
var mostrarMensagem = function () {
    var nomeAplicacao = 'Aplicacaozinha';
    console.log("Acesso a aplica\u00E7\u00E3o " + nomeAplicacao + ".");
    alert("Bem vindo a aplica\u00E7\u00E3o tal " + nomeAplicacao + ".");
};
mostrarMensagem();
var mostrarDobroNum = function (num) {
    var dobro = num * 2;
    alert("O dobro de " + num + " \u00E9 " + dobro + ".");
};
mostrarDobroNum;
var boasVindas = function (nome) {
    alert(nome + ", seja bem vindo.");
};
boasVindas('Lucas');
var calcularMedia = function (n1, n2, n3, nome) {
    var media = ((n1 + n2 + n3) / 3).toFixed(2);
    alert(nome + ", sua m\u00E9dia \u00E9 " + media + ".");
    console.log("Nota1: " + n1 + ", Nota2:" + n2 + ", Nota3: " + n3);
};
calcularMedia(90, 70, 85, 'Lucas');
