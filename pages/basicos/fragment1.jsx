import React from 'react'
export default function fragment1(){
    return(
        <React.Fragment>

            <h1>Titulo</h1>
            <h2>subtitulo</h2>
        </React.Fragment>
    )
}

//não posso retornar 2 elementos adjacentes como por exemplo: h1 e h2 juntos.
//essa é a 1 solução