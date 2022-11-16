import React, { useState, useEffect } from 'react'
import axios from 'axios';

import TablaGenero from '../../Componentes/Genero/TablaGenero';
const VerGeneros = () => {
    const [lista, setLista] = useState([]);
    const uri = "https://localhost:44315/api/Genero";


    useEffect(() => {
        const getData = async () => {
            const response = axios.get(uri);
            return response;


        }

        getData().then((response) => {
            setLista(response.data);
            console.log(response.data);

        })



    }, [])
    return (
        <div class="container text-center">
            <table class="table">
                <thead>

                    <tr class="table-info">
                        <th>
                            iD_GENERO

                        </th>


                        <th>
                            GENERO
                        </th>



                    </tr>

                </thead>
                <tbody>

                    {lista.map((Gen, index) => (
                        <TablaGenero
                            key={index}
                            Gen={Gen}
                        />

                    ))
                    }


            

                </tbody>

            </table>



        </div>
    )
}

export default VerGeneros;