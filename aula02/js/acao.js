var nome = document.getElementById("nome");
var cor = document.querySelector("#cor");
var corfonte = document.querySelector("#corfonte");
var email = document.querySelector("#email");
var botao = document.querySelector("#btn");

cor.addEventListener("change", function () {
  //titulo.style.color = cor.value;
  Fundo.style.background = cor.value;
  //document.body.style.color = "#FFF";
  //alert(cor.value);
});

corfonte.addEventListener("change", function () {
  document.body.style.color = corfonte.value;
});

botao.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Bem vindo " + nome.value);
});

window.onload = function () {
  var corFav = prompt("Qual sua cor favorita?");
  var pX = prompt("Digite um valor de posição eixo X: ");
  var pY = prompt("Digite um valor de posição eixo Y: ");

  var alvo = document.querySelector("#alvo");

  alvo.style.marginLeft = pX + "vw";
  alvo.style.marginTop = pY + "vh";
  alvo.style.backgoundColor = corFav;
};
