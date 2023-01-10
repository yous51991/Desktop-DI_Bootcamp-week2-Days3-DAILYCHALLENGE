// Methode 1
let star1 = 6;
let str1 = "";
for (let i = 1; i <= star1; i++) {
    str1 += "* ".repeat(i);
    str1 += "\n";
}
console.log(str2);
    

// Methode 2
let star2 = 5;
let str2 = "";
for (let i = 1; i <= str2; i++) {
  for (let j = 0; j < i; j++) {
    str2 += "* ";
  }
  str2 += "\n";
}
console.log(str2);