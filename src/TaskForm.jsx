import { useState, useContext } from "react";

import { CreateContext } from "./context/TaskContext";

function TaskForm() {
  const { createTaskss, tasks } = useContext(CreateContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
      id: tasks.length,
    };
    console.log(newTask);
    createTaskss(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1 style={{}}>Deja tu comentario</h1>
      <form style={{ display: "grid", width: "80px" }} onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          autoFocus
          type="text"
          placeholder="Tu Nombre.."
        />
        <textarea
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          type="text"
          placeholder="Deja tu comentario.."
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default TaskForm;
