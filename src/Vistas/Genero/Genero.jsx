import React from 'react'
import VerGeneros from '../../Hooks/Genero/VerGeneros'
import VerGenerosPorId from '../../Hooks/Genero/VerGenerosPorId'
import CrearGenero from '../../Hooks/Genero/CrearGenero'
import BorrarGenero from '../../Hooks/Genero/BorrarGenero'
export default function Genero() {
    return (
        <>
            <div>Genero</div>
            <VerGeneros/>
            <VerGenerosPorId/>
            <CrearGenero/>
            <BorrarGenero/>
            
            

            
        </>
    )
}
