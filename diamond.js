const n = 8; 
let pattern = " ";

for (let i = 1; i <= n; i++) {
  pattern += " ".repeat(n - i) + "*".repeat(2 * i - 1) +"\n";
}


for (let i = n -1; i >= 1; i--) {
  pattern += " ".repeat(n - i) +"*".repeat(2 * i - 1) + "\n";
}

console.log(pattern)
