import React from 'react'

const TablaGenero = ({ Gen }) => {

    return (
        <>
            <tr>
                <td>
                    {Gen.genero_id}
                </td>

                <td>
                    {Gen.genero}
                </td>




            </tr>




        </>

    )


}

export default TablaGenero;