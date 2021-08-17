export default function jsx4(){  // sempre tenho que exportar por padrão todos os componentes
    const subtitulo = "Estou no Js"
    const trech3 =<h3>{3*3}</h3>
    const trech4 = <h4>{Math.max(50, 39)}</h4>
    return(
        <div>
            <h1> integração html e Js</h1>
            {trech3},
            {trech4}
           

       
        </div>
    ) 
 }

 //para interpretar que é uma variável preciso colocar o valor da variavel ou constante dentro de chaves