/* Utilise l'auto incrémentation numérique. ne peut pas s'appliquer a une chaine de caractère.*/


let num = prompt ("Combien d'étage veut-tu dans ta pyramide?")

function Pyra() {
  var output = '';
  for (var i = 1; i <= num; i++) {
      for (var j = 1; j <= i; j++) {
          output += j + '  ';
      }
      console.log(output);
      output = '';
  }
}
Pyra();

/* Utilise la fonction "repeat" pour multiplier une chaine de caractère.*/

let floor = prompt("Combien d'étages veux-tu pour ta pyramide ?")


for( count = 1; count <= floor; count++)
{
  console.log(" ".repeat(floor-count)+"#".repeat(count))
}
