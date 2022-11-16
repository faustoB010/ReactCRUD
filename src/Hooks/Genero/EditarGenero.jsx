import React,{useState, useEffect} from 'react';
import axios from 'axios';
import ComboBoxGenero from '../../Componentes/Genero/ComboBoxGenero';

const EditarSucursales = () => {
    const [lista, setLista] = useState([]);
    const uri = "https://localhost:44344/api/Genero";
    const [list, setList] = useState([]);
    const [RucSuc, setRucSuc] = useState();
    const [DirSuc, setDirSuc] = useState();
    const [TelfSuc, setTelfSuc] = useState();
    
    function verSucursal(){
        let idP = document.getElementById("IdGeneroSelect").value;
        const uri = "https://localhost:44344/api/Genero/"+idP;
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setList(response.data);
            setRucSuc(response.data.rucSuc);
            setDirSuc(response.data.direccionSuc);
            setTelfSuc(response.data.telfSuc);
        });
    }

    function editarSucursal(){
        let idP = document.getElementById("IdSucursalSelect").value;
        const uri = "https://localhost:44344/api/Sucursales/"+idP;
        let ruc = document.getElementById("EditarRucSuc").value;
        let dir = document.getElementById("EditarDireccionSuc").value;
        let tel = document.getElementById("EditarTelfSuc").value;

        var data = JSON.stringify({
            "rucSuc": ruc,
            "direccionSuc": dir,
            "telfSuc": tel
        });
        
        var config = {
            method: 'put',
            url: uri,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
        .then(function (response) {
            alert("Sucursal editada correctamente!");
            window.location.href = window.location.href;
        })
        .catch(function (error) {
            alert("Sucursal no pudo ser editada");
        });
    }
    
    useEffect(()=>{
        const getData = async () =>{
        const response = axios.get(uri);
        return response;
        }

        getData().then((response)=>{
            setLista(response.data);
        });
    }, [])
    return (
        <>
            <select id='IdSucursalSelect' class="btn btn-info"> 
                {
                    lista.map((Suc, index)=>(
                        <ComboBox
                            key={index}
                            Suc={Suc}
                        />
                    ))
                }
            </select>
            &nbsp; &nbsp;
            <button
                onClick={verSucursal} class="btn btn-dark"
            >
                Buscar
            </button><br/><br/>
            <div>
                <input id="EditarRucSuc" type={"text"} value={RucSuc} onChange={e=>setRucSuc(e.target.value)}></input>
                <input id="EditarDireccionSuc" type={"text"} value={DirSuc} onChange={e=>setDirSuc(e.target.value)}></input>
                <input id="EditarTelfSuc" type={"text"} value={TelfSuc} onChange={e=>setTelfSuc(e.target.value)}></input>

                <br/><br/><button class="btn btn-dark"
                    onClick={editarSucursal}
                >Editar</button>
            </div>
        </>
    )
}
export default EditarSucursales;