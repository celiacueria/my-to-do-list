import { useState } from "react"
import update from "../img/actualizar.png";
import deleteIcon from "../img/cerrar.png";
import save from "../img/disquete.png";

export function Task(props){
    const {task, onUpdateTask, onDeleteTask} = props //Lo que recibe de App
    const [edit, setEdit] = useState(false);
    const  [isCompleted, setIsCompleted] = useState(false);
    

    function ActiveEdition(){

        const [value, setValue] = useState(task.task);

        function handleChange(e){
            const text= e.target.value
            setValue(text)
        }

        function handleClick(e){
            e.preventDefault()
            //en app
            onUpdateTask(
                {id : task.id,
                task: value,
                completed: false}
            )

            setEdit(false)
        }

        return(
            <>
                <input
                type="text"
                onChange={handleChange}
                value={value} />

                <img src={save} className="edit-button"
                onClick={handleClick} alt="edit"  />
                 

                <img src={deleteIcon} className="edit-button"
                onClick={() => onDeleteTask(task.id)} alt="delete" />
               
            </>
        )


    }
    function NoActiveEdition(){
        return(
            <>
             <span
             className={
                isCompleted ? "todoTarea spanSubrayada" : "todoTarea"
             }
             onClick={() => setIsCompleted(!isCompleted)}>{task.task}</span>
            <img src={update} alt="save" className="edit-button"
            onClick={() => setEdit(true)} />
              
      
            <img  src={deleteIcon} alt="delete" className="edit-button"
             onClick={() => onDeleteTask(task.id)} />
           

            </>
        )


    }
   
        return(
            <>
           <div className="tarea-container" id={task.id}>
           {
            edit
             ? <ActiveEdition /> 
            : <NoActiveEdition />
           }
           </div>
            </>
        )
    }

    