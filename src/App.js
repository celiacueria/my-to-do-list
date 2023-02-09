import "./App.css";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Tarea } from "./components/Tarea";

function App() {
  
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);

  function handleSubmit(e) {
    //Qué no lo ejecute default
    e.preventDefault();
    if (tarea === "") {
      alert("Debes rellenar la tarea");
      return;
    }
   

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
    };

    const temp = [nuevaTarea, ...listadoTareas];
    setListadoTareas(temp);
    setTarea("");
  }

  function handleChange(e) {
    setTarea(e.target.value);
    console.log(tarea);
  }

  function onActualizarTarea(objEditarTarea) {
    const { id, tarea } = objEditarTarea;
    const temp = [...listadoTareas];
    const elemento = temp.find((item) => item.id === id);
    elemento.tarea = tarea;
    setListadoTareas(temp);
  }

  function onBorrarTarea(id) {
    const temp = listadoTareas.filter((item) => item.id !== id);
    setListadoTareas(temp);
  }

  return (
    <>
      <div className="global-container">
        <h1>To do list</h1>
        <div className="input-container">
          <Formulario
            tarea={tarea}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <div className="container-task">
         
          <div className="container-info-tasks">
            {listadoTareas.map((tarea) => (
              <Tarea
                key={tarea.id}
                id={tarea.id}
                tarea={tarea}
                onActualizarTarea={onActualizarTarea}
                onBorrarTarea={onBorrarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
