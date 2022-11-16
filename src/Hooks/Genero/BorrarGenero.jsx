import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ComboBoxGenero from '../../Componentes/Genero/ComboBoxGenero';

const BorrarGenero = () => {
    const [lista, setLista] = useState([]);
    const uri = "https://localhost:44315/api/Genero/";

    function borrarGenero(){
        let idP = buscarId(document.getElementById("IdGeneroSelect2").value);
        let uri2 = uri + idP;
        var config = {
            method: 'delete',
            url: uri2
        };
        axios(config)
        .then(function (response) {
            alert("Género borrado exitosamente!");
            window.location.href = window.location.href;
        })
        .catch(function (error) {
            alert("Género no fue borrado");
        });
    }

    function buscarId(nom_genero) {
        let id_genero;
        for (let i = 0; i < lista.length; i++) {
            let a = lista[i];
            if (a.genero === nom_genero) {
                return id_genero = a.genero_id;


            }

        }}
        
    useEffect(()=>{
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setLista(response.data);
        });
    }, [])
    return(
        <>
        <br>
        </br>

        <h1>Eliminar Genero</h1>

        <br>
        </br>
            <select id='IdGeneroSelect2' class="btn btn-info combo">
                {
                    lista.map((Gen, index)=>(
                        <ComboBoxGenero
                            key={index}
                            Gen={Gen}
                        />
                    ))
                }
            </select>
            <button
                onClick={borrarGenero} class="btn btn-dark"
            >
                Borrar
            </button>
        </>
    )
}
export default BorrarGenero;