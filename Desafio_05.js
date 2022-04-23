// Escreva um função que recebe dois parâmetros (fullname, flag).
// Se a flag for igual a "firstname", deve retornar apenas a primeira palavra do parâmetro fullname.
// Se a flag for igual a "lastname", deve retornar todos o texto, exceto a primeira palavra do parâmetro fullname.
// Se o parâmetro flag for vazio ou fullname conter, apenas uma palavra, apenar retornar o conteúdo de fullname.

// Resultado esperado:
//console.log(myFunction("John Williams Smith", "firstname")); // John
//console.log(myFunction("John Williams Smith", "lastname")); // Williams Smith
//console.log(myFunction("John Williams Smith")); // John Williams Smith
//console.log(myFunction("John", "lastname")); // John

function myFunction(fullname, flag = "") {
  const parts = fullname.split(" ");
  if (flag.length == 0 || parts.length <= 1) {
    return fullname
  } else if (flag === "firstname") {
    return parts[0]
  }
  return parts.slice(1).join(" ");
}

// OUTRA FORMA REDUZIDA

function myFunction(fullname, flag = "") {
  const parts = fullname.split(" ");
  return flag.length == 0 || parts.length <= 1 ? fullname : flag === "firstname" ? parts[0] : parts.slice(1).join(" ");
}