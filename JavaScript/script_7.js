let answer = "";
while(answer !== 'STOP'){

  let answer = prompt("Salut mec, tu veux quoi ?")

  switch (true){
    case answer.slice(-1) === '?':
    console.log("Ouais Ouais..." );
    break;
    case answer === answer.toUpperCase():
    console.log("Pwa, calme-toi...");
    break;
    case answer.includes('fortnite'): case answer.includes('Fortnite'):
    console.log("on s' fait une partie soum-soum ?");
    break;
    case answer === "":
    console.log("t'es en PLS ?");
    break;
    default :
    console.log("balek.");
    break;
  }
}