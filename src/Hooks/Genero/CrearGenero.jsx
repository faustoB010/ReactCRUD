import React from 'react';
import axios from 'axios';

const CrearGenero=()=>{
    const uri="https://localhost:44315/api/Genero"

    function CrearGenero(){
        let X=document.getElementById("genero_nom").value;
        var data_genero=JSON.stringify({
            "genero": X
        });

        var config={
            method:'post',
            url:uri,
            headers:{
                'Content-Type':'application/json'
            },
            data:data_genero
        };
        axios(config)
        .then(function(response){
            alert("Genero creado correctamente");
            window.location.href=window.location.href;
        })
        .catch(function(error){
            alert("Genero creado correctamente");
        });
    
    }
    return(
        <>
        
        <p>gen:<input id='genero_nom' type={'text'}></input><br/></p>
        <button onClick={CrearGenero} class="btn btn-dark">
            Crear
        </button>
        
        </>
    )
}
export default CrearGenero;   