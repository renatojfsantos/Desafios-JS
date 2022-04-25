// Escreva uma função que recebe duas strings (a, b) como parâmetro e retorna o número de vezes que a string a é utilizada dentro de b.

// Resultado esperado:
// myFunction("a", "Quantas vezes o valor de 'a' ocorre aqui?") // 5
// myFunction("as", "Quantas vezes o valor de 'a' ocorre aqui?") // 1
// myFunction("q", "Quantas vezes o valor de 'a' ocorre aqui?") // 2


function myFunction(a, b) {
  return b.match(new RegExp(a, 'gi')).length;
}

// OUTRA FORMA REDUZIDA

function myFunction(a, b) {
  return b.toLowerCase().split(a.toLowerCase()).length - 1;
}