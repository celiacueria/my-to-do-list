import { useState } from "react"
import actualizar from "../img/actualizar.png";
import borrar from "../img/cerrar.png"
import guardar from "../img/disquete.png"

export function Tarea(props){
    const {tarea, onActualizarTarea, onBorrarTarea} = props //Lo que recibe de App
    const [editando, setEditando] = useState(false);
    const  [estaCompletada, setEstaCompletada] = useState(false);
    

    function ModoEdicionActivado(){

        const [valor, setValor] = useState(tarea.tarea);

        function handleChange(e){
            const text= e.target.value
            setValor(text)
        }

        function handleClick(e){
            e.preventDefault()
            //en app
            onActualizarTarea(
                {id : tarea.id,
                tarea: valor,
                completado: false}
            )

            setEditando(false)
        }

        return(
            <>
                <input
                type="text"
                onChange={handleChange}
                value={valor} />

                <img src={guardar} className="edit-button"
                onClick={handleClick} alt="edit"  />
                 

                <img src={borrar} className="edit-button"
                onClick={() => onBorrarTarea(tarea.id)} alt="delete" />
               
            </>
        )


    }
    function ModoEdicionDesactivado(){
        return(
            <>
             <span
             className={
                estaCompletada ? "todoTarea spanSubrayada" : "todoTarea"
             }
             onClick={() => setEstaCompletada(!estaCompletada)}>{tarea.tarea}</span>
            <img src={actualizar} alt="save" className="edit-button"
            onClick={() => setEditando(true)} />
              
      
            <img  src={borrar} alt="delete" className="edit-button"
             onClick={() => onBorrarTarea(tarea.id)} />
           

            </>
        )


    }
   
        return(
            <>
           <div className="tarea-container" id={tarea.id}>
           {
            editando
             ? <ModoEdicionActivado /> 
            : <ModoEdicionDesactivado />
           }
           </div>
            </>
        )
    }

    