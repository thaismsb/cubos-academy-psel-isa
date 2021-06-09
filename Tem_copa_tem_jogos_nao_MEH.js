function solucao(ano) {
    const copa= (1930-ano)%4;
    const olimpiada=(1896-ano)%4;
 
   if(copa == 0){
       console.log("COPA")
   }else if(olimpiada == 0){
       console.log("JOGOS")
          
       }else{
           console.log("MEH")
       }
 }