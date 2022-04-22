// Escreva uma função que recebe 6 parâmetros (a, b, c, d, e, f).
// Faça a soma de a com b.
// O resultado da soma, subraia o valor de c.
// O resultado da subtração, multiplique por d e faça divisão por e.
// E para finalizar, faça o resultado elevado à potência de f.

// Resultado esperado:
// myFunction(6, 5, 4, 3, 2, 1) // 10.5
// myFunction(6, 2, 1, 4, 2, 3) // 2744
// myFunction(2, 3, 6, 4, 2, 3) // -8

function myFunction(a, b, c, d, e, f) {
  return (((a + b) - c) * d / e) ** f;
}