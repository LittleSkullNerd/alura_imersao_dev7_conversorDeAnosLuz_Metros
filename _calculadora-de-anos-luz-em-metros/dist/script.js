var nomeDoUsuario = prompt("Qual o seu nome?");
var anosLuz = prompt("Digite o valor");
var velocidadeDaLuz = 299792458;

var metros = anosLuz * velocidadeDaLuz;

alert(
  "Olá " + nomeDoUsuario + "!" + " O valor em Anos Luz em metros é: " + metros
);