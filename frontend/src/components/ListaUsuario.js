import React, { useEffect, useState } from "react"
import axios from "axios"

import { Link } from "react-router-dom"


const ListaUsuario =() => {

    const[lista, setLista] = useState([])

    useEffect(() =>{
        const getUsuarios = async() =>{
            const res = await axios.get("http://localhost:4000/api/usuarios")
            setLista(res.data)
        }
        getUsuarios();
    },[lista])

    const eliminarUsuario = async (id) =>{
        await axios.delete ("http://localhost:4000/api/usuarios/" + id) 
    }

    return (
        <div classnombre="row">
            {
                lista.map(list => (
                    <div classnombre="col-md-4 p-2" key={list._id}>
                    <div classnombre="cards"> 
                        <div classnombre="card-header">
                         <m5>nombre: {list.nombre}</m5>
                         </div> 
                         <div classnombre="card-body">
                            <p>Apellido: {list.apellido}</p>
                         </div>

                         <div classnombre="card-footer">
                            <button classnombre="text-red-400 text-sm" onClick={() => eliminarUsuario(list._id)}>
                                eliminar
                            </button>

                            <Link classnombre="btn-primary m-2" to={"/edit/" + list._id}>
                            editar
                            </Link>
                         </div>
                    </div>
                   </div>
                ))
            }
          
        </div>
    )
}
export default ListaUsuario