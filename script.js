// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
  let imc = peso / altura ** 2;
  return imc;
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolar(dolar) {
  let valorReal = dolar * 4.8;
  return valorReal.toFixed(2);
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularRetangulo(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  alert(`O perimetro é ${perimetro}`);
  alert(`A área é ${area}`);
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularCirculo(raio) {
  let comprimento = parseInt(2 * Math.PI * raio);
  let area = parseInt(Math.PI * raio ** 2);
  alert(`O comprimento é ${comprimento.toFixed(2)}`);
  alert(`A área é ${area.toFixed(2)}`);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function calcularTabuada(x) {
  let i = 0;
  while (i <= 10) {
    let resultado = x * i;
    i++;
    console.log(resultado);
  }
}

//ou

function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
