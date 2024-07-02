// Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() {
  console.log("Olá mundo!");
}

saudacao();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoNome(nome) {
  console.log(`Olá, ${nome}!`);
}

saudacaoNome("Erick");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero) {
  console.log(numero * 2);
}

dobro(5);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3) {
  let media = (num1 + num2 + num3) / 3;
  console.log(media);
}

media(10, 5, 6);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function comparacao(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1);
  } else {
    console.log(numero2);
  }
}

comparacao(10, 9);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function potencia(n) {
  console.log(n ** 2);
}

potencia(2);
