import React, { useContext, useState } from 'react'
import { TareasContext } from '../contexts/TareasProvider'
import { v4 as uuidv4 } from 'uuid'

function Formulario() {
    const objeto = useContext(TareasContext)

    const [text, setText] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(text === "") return
        objeto.agregarTarea({id: uuidv4(), title: "tarea", body: text})
        setText("")
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Escribe tu tarea' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type='submit'>Guardar</button>
    </form>
    </>
  )
}

export default Formulario