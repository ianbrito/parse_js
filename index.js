const readline = require("readline-sync");
const fs = require("fs");
const parser = require("./parser");

if (readline.keyInYN("Deseja criar um arquivo js da gramática gerada")) {
  fs.writeFileSync(`export_${Date.now()}.js`, parser.generate(), err => {
    if (err) {
      return console.log("erro");
    }
    console.log("Arquivo Criado");
  });
}
console.log(`
  Operações aceita: adição, subtração, multiplicação e divisão.
`);
const expressao = readline.question("Digite a expressão aritmética: ");
let resultado = parser.parse(expressao);

console.log(`${expressao} = ${resultado}`);
