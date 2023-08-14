// Exercice N°1 : Credit Card Mask
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    const maskedPart = "#".repeat(cc.length - 4);
    const lastFour = cc.slice(-4);
    return maskedPart + lastFour;
  }
}

// Exercice N°2 : 1st and 2nd Character Removal
function removeChar(str) {
  return str.slice(1, -1);
}

// Exercice N°3 : DNA to RNA
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

// Exercice N°4 : Jenny's Secret Message
function greet(name) {
  if (name != "Johnny") return "Hello, " + name + "!";
  if (name === "Johnny") return "Hello, my love!";
}

// Exercice N°5 : If You Can't Sleep, Just Count Sheep!
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};
