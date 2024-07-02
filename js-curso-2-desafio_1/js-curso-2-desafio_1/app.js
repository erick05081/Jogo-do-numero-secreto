//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");

titulo.innerHTML = "Hora do Desafio.";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function msgConsole() {
  console.log("O botão foi clicado.");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function msgAlert() {
  alert("Eu amo JS.");
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function cidadeBrasil() {
  let cidade = prompt("Insira o nome de uma cidade do Brasil:");
  alert(`Estive em ${cidade} e pensei em você.`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function soma() {
  let num1 = Number(prompt("Insira o primeiro número da soma:"));
  let num2 = Number(prompt("Insira o segundo número da soma:"));
  let soma = num1 + num2;
  alert(`A soma entre ${num1} e ${num2} é igual a ${soma}`);
}
