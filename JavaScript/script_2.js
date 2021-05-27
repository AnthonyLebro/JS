let num = prompt ("De quel nombre veux-tu calculer la factorielle ?")

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);



console.log("Le résultat est "+factorialize(num))