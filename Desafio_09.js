// Escreva uma função que recebe um array a e um valor b como parâmetros.
// A função deve remover todas as ocorrências de b e retornar o array filtrado.

// Resultado esperado:
// myFunction([1, 2, 3], 2); // [1, 3]
// myFunction([1, 2, "3"], "3"); // [1, 2]
// myFunction(["1", false, 2, "3"], false); // ['1', 2, '3']
// myFunction([5, 1, 2, 5, 3, 5], 5); // [1, 2, 3]

function myFunction(a, b) {
  const filtered = [];
  for (const item of a) {
    if (item !== b) {
      filtered.push(item);
    }
  }
  return filtered;
}

// OUTRA FORMA

function myFunction(a, b) {
  return a.filter(item => item !== b);
} 