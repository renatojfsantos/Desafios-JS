//Escreva uma função que recebe dois parâmetros(text, flag).
//Se a flag for igual a "start", deve retornar os 3 primeiros caracteres do parâmetro text.
//Se a flag for igual a "end", deve retornar os 3 últimos caracteres do parâmetro text.
//Se o parâmetro text tiver menos de 3 caracteres, deve retornar o text.

// Resultado esperado:
// myFunction("abcdefg", "start") // abc
// myFunction("abcdefg", "end") // efg
// myFunction("ab", "end") // ab
// myFunction("abcdefg") // abc


/**
* RESOLUÇÃO COM SLICE
*/

// function myFunction(text, flag = "start") {
//   if(text.length < 3) {
//     return text;
//   }
//   if(flag === "start") {
//     return text.slice(0, 3);
//   }
//   return text.slice(-3);
// }

// FORMA CONTRAIDA COM TERNÁRIO

// function myFunction(text, flag = "start") {
//   return text.length < 3 ? text : flag === "start" ? text.slice(0, 3) : text.slice(-3);
// }

/**
* RESOLUÇÃO COM SUBSTRING
*/
function myFunction(text, flag = "start") {
  if(text.length < 3) {
    return text;
  }
  if(flag === "start") {
    return text.substring(0, 3);
  }
  return text.substring(-3);
}

// FORMA CONTRAIDA COM TERNÁRIO

function myFunction(text, flag = "start") {
  return text.length < 3 ? text : flag === "start" ? text.substring(0, 3) : text.substring(-3);
}