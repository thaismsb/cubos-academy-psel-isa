const precos = [100,500,100,200,50];

let total=0;
let resultado=0;
   
function solucao(precos) { 

  if(precos.length<=4)  {
    for ( let indice = 0; indice < precos.length; indice++ ){
   total += precos[indice];
   
}console.log(total);
} else if(precos.length>4){ 
 for ( let indice = 0; indice < precos.length; indice++ ){

     resultado += precos[indice];
     const menor = Math.min(...precos);

     totalcasodois= resultado - menor;

    }console.log(totalcasodois);
    
}
}