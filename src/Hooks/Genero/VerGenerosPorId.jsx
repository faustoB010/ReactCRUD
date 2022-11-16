import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ComboBoxIDS from '../../Componentes/Genero/ComboBoxIDS';

const VerGeneroPorId = () => {
    const [lista, setLista] = useState([]);
    const [lista2, setLista2] = useState([]);
    const uri = "https://localhost:44315/api/Genero";

    function VerGenero() {
        let id = document.getElementById("Id_Genero").value;
        let idP = buscarId(id);

        const uri2 = "https://localhost:44315/api/Genero/" + idP;

        console.log(uri2);

        const getData = async () => {
            const response = axios.get(uri2);
            return response;



        }

        getData().then((response) => {
            setLista2(response.data);


        });


    }
    function buscarId(id) {
        
        for (let i = 0; i <lista.length; i++) {
            let a = lista[i];
            if (a.genero_id === parseInt(id)) {
                return a.genero_id;


            }

        }
    }




    useEffect(() => {
        const getData = async () => {
            const response = axios.get(uri);
            return response;


        }

        getData().then((response) => {
            setLista(response.data);


        })



    }, [])

    return (
        <>
            <div class="container-fluid">
                Escoja el Genero a buscar <br />
                <select class="btn btn-info combo" id="Id_Genero">
                    {

                        lista.map((Gen, index) => (

                            <ComboBoxIDS
                                key={index}
                                Gen={Gen}

                            />
                        ))
                    }

                </select>

                <button onClick={VerGenero} class="btn btn-dark">
                    Buscar




                </button>
                <br></br>
                <br></br>
                <div>
                    <label>ID_GENERO {lista2.genero_id}</label>
                    <label>NOMBRE_GENERO {lista2.genero}</label>

                </div>


            </div>


        </>
    )


}

export default VerGeneroPorId;