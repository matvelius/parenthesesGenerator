const fs = require('fs')

let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {

  const n = parseInt(line) * 2

  generateParentheses(n, "")

})

function generateParentheses(n, prefix) {
  if (n == 0) {
    if (isSequenceCorrect(prefix)) { 
      console.log(prefix)
    }
    rl.close()
    return
  }

  generateParentheses(n - 1, prefix + "(")
  generateParentheses(n - 1, prefix + ")")

}

function isSequenceCorrect(seq) {
  let counter = 0
  for (let i = 0; i < seq.length; i++) {
    if (seq.charAt(i) == "(") {
      counter++
    } else {
      counter--
    }
    if (counter < 0) { return false }
  }

  return counter == 0
}