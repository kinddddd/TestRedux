import React from 'react'
import { useForm } from "react-hook-form"

const AddCharacters = () => {

    const {register, handleSubmit} = useForm();

    const envioFormulario = (datos) => {
        const formData = new FormData();
        formData.append("name", datos.name);
        formData.append("email", datos.email);
        formData.append("password", datos.password);
        formData.append("imagen", datos.imagen[0]);

        console.log(datos);
    }

  return (
    <form onSubmit={handleSubmit(envioFormulario)}>
        <label>Name
            <input type="text"{...register("name", {required: true})}/>
        </label>
        <label>Email
            <input type="email"{...register("email", {required: true})}/>
        </label>
        <label>Password
            <input type="password"{...register("password", {required: true})}/>
        </label>
        <label>
            Password
            <input type="file"{...register("imagen")} />
        </label>
        <button>Enviar</button>
    </form>
  )
}

export default AddCharacters