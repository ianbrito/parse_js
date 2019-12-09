const readline = require("readline-sync");
const fs = require("fs");
const parser = require("./parser");

if (readline.keyInYN("Deseja criar um arquivo js da gramática gerada")) {
  fs.writeFileSync("output.js", parser.generate(), err => {
    //Caro ocorra algum erro
    if (err) {
      return console.log("erro");
    }
    //Caso não tenha erro, retornaremos a mensagem de sucesso
    console.log("Arquivo Criado");
  });
}
console.log(`
  Operações aceita: adição, subtração, multiplicação e divisão.
`)
const expressao = readline.question("Digite a expressão aritmética: ");
let resultado = parser.parse(expressao);

console.log(`${expressao} = ${resultado}`);
