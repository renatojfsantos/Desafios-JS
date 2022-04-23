// Escreva um função que recebe um número como parâmetro.
// Se o número for par, retornar true, e se for ímpar, retornar false.

// Resultado esperado:
// myFunction(8) // true
// myFunction(-10) // true
// myFunction(7) // false
// myFunction(-41) // false

function myFunction(number) {
  return number % 2 === 0 ? true : false;
  // return number % 2 === 0
}

// OUTRA FORMA

function myFunction(number) {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}
