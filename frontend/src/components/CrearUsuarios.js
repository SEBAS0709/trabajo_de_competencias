import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const CrearUsuarios =() => {

    const valorInicial = {
        nombre:"",
        apellido:""
    }

let {id} = useParams();

    const [usuario, setUsuario] = useState(valorInicial)
    const[subId, setSubId] = useState(id)

    const capturarDatos = (e) =>{
        const {name, value} = e.target
        setUsuario({...usuario, [name]: value})
    }

    const guardarDatos = async (e) =>{
        e.preventDefault();
      
         const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido
         }

         await axios.post("http://localhost:4000/api/usuarios", newUser)

        setUsuario({...valorInicial})
    }
        const actualizarUser = async (e) =>{
            e.preventDefault();
            const newUser = {
                nombre: usuario.nombre,
                apellido: usuario.apellido
            }
            await axios.put("http://localhost:4000/api/usuarios/" + subId, newUser)
            setUsuario({...valorInicial})
            setSubId("")
        }

     const obUno = async(valorId) =>{
        const res = await axios.get("http://localhost:4000/api/usuarios/" + valorId)
        setUsuario({
            nombre:res.data.nombre,
            apellido:res.data.apellido
        })
     }
    useEffect (() => {
        if (subId !== ""){
            obUno(subId)
        }
    }, [subId])

    return (
        <div className="coll-md-6 offset-md-3">
            <div className=" card card-body">

                <form onSubmit={guardarDatos}>
                    <h2 className="text-center mb-3"> crear usuario</h2>
                <div className="mb-3">
                    <label>
                    nombre:
                    </label>
                    <input type="text" className="form-control" placeholder="ingrese el nombre de usuario"
                    required 
                    name="nombre"
                    value={usuario.nombre}
                    onChange={capturarDatos}
                    />
                </div>


                <div className="mb-3">
                    <label>
                        apellido:
                    </label>
                    <input type="text" className="form-control" placeholder="ingrese el apellido de usuario"
                    required 
                    name="apellido"
                    value={usuario.apellido}
                    onChange={capturarDatos}
                    />
                </div>
                <button className="btn btn-primary form-control">
                    guardar usuario
                </button>
                </form>
               <form onSubmit={actualizarUser}>
                <button className="btn btn-danger form-control mt-2">
                    actualizar informacion
                </button>
               </form>
            </div>
        </div>
    )
}
export default CrearUsuarios