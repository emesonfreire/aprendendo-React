/*
exercício proposto

<div>
    <span>1,</span>
    <span>2,</span>
    <span>3,</span>
    <span>4,</span>
    <span>5,</span>
    <span>6,</span>
    <span>7,</span>
    <span>8,</span>
    <span>9,</span>
    <span>10,</span>
</div>




*/
function gerarlista( final = 10){  // sempre tenho que exportar por padrão todos os componentes
    const lista= []
    for(let i=1; i<=final; i++){
        lista.push(<span>{i},</span>)  // meio de pegar coisas em um array
    }

    
     return lista
  }
 
 export default function lista(){  // sempre tenho que exportar por padrão todos os componentes
     
     return(
         <div>
             {gerarlista(20)}
         </div>
     )
  }