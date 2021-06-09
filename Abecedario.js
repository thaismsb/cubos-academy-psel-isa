
const letra = "m"
const palavras = [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja"
    ]

    const perderam =[];
function solucao(letra, palavras) {
	for(let item of palavras){
        
        if (item[0]!=letra)

        perderam.push(item);
    } console.log(perderam.length);
    
}