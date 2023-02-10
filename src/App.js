import "./App.css";
import { Form } from "./components/Form";
import { useState } from "react";
import { Task } from "./components/Task";

function App() {
  
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") {
      alert("Debes rellenar la tarea");
      return;
    }

    const newTask = {
      id: taskList.length,
      task: task,
      completado: false,
    };

    console.log(task.length)

    
    const temp = [newTask, ...taskList];

    setTaskList(temp);
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
    console.log(task);
  }

  function onUpdateTask(objEditTask) {

    
    const { id, task } = objEditTask;
    const temp = [...taskList];
    const elemento = temp.find((item) => item.id === id);
    elemento.task = task;
    
    setTaskList(temp);
  }

  function onDeleteTask(id) {
    const temp = taskList.filter((item) => item.id !== id);
    setTaskList(temp);
  }

  return (
    <>
      <div className="global-container">
        <h1>To do list</h1>
        <div className="input-container">
          <Form
            task={task}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <div className="container-task">
          <div className="container-info-tasks">
          
            {taskList.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                task={task}
                onUpdateTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
