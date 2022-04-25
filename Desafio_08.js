// Escreva um função que recebe um array por parâmetro e remove os 3 primeiros elementos do array.
// Caso o array tenha menos de 3 elementos, retornar um array vazio.

// Resultado esperado:
// myFunction([1, 2, 3, 4, 5]); // [4, 5]
// myFunction([5, 4, 3, 2, 1, 0]); // [2, 1, 0]
// myFunction([10, 20, 30]); // []
// myFunction([99, 100]); // []

function myFunction(a) {
  return a.length > 3 ? a.slice(3) : [];
}

// OUTRA FORMA

function myFunction(a) {
  if(a.length >3) {
    a.splice(0,3);
    return a;
  }
  return [];
}