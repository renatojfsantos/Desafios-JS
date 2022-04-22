// Escreva uma função que recebe dois valores, a e b, como parâmetros. Essa função deve retornar true se os dois
// valores forem iguais e do mesmo tipo. Caso contrário, false.

// Resultado esperado:
// myFunction(2, 3) // false
// myFunction(3, 3) // true
// myFunction(1, "1") // false
// myFunction("10", "10") // true

function myFunction(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
