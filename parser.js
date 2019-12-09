const Parser = require("jison").Parser;
const grammar = require("./grammar");

const parser = new Parser(grammar);
// console.log(parser.generate());
module.exports = parser;
