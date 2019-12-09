module.exports = {
  lex: {
    rules: [
      ["\\s+", ""],
      ["[0-9]+(?:\\.[0-9]+)?\\b", "return 'NUMBER';"],
      ["\\+", "return '+';"],
      ["-", "return '-';"],
      ["\\*", "return '*';"],
      ["\\/", "return '/';"],
      ["\\(", "return '(';"],
      ["\\)", "return ')';"],
      ["$", "return 'EOF';"]
    ]
  },
  operators: [
    ["left", "+", "-"],
    ["left", "*", "/"],
    ["left", "UMINUS"]
  ],

  bnf: {
    expressions: [["e EOF", "return $1;"]],
    e: [
      ["e + e", "$$ = $1 + $3;"],
      ["e - e", "$$ = $1 - $3;"],
      ["e * e", "$$ = $1 * $3;"],
      ["e / e", "$$ = $1 / $3;"],
      ["- e", "$$ = -$2;", { prec: "UMINUS" }],
      ["( e )", "$$ = $2;"],
      ["NUMBER", "$$ = Number(yytext);"]
    ]
  }
};
