import { useContext } from "react";
import { CreateContext } from "./context/TaskContext";
import { FaStar } from "react-icons/fa";

function CreateTasks() {
  const { tasks, deleteTask } = useContext(CreateContext);
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {tasks.map((taska) => (
        <div key={crypto.randomUUID()}>
          <div className="bg-slate-700  rounded-md ">
            <div className="grid">
              <h1 className="text-xl  text-white font-bold capitalize ">
                {taska.title} <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h1>
            </div>
            <p className="text-gray-400">{taska.description}</p>
            <button onClick={() => deleteTask(tasks.id)}>Eliminar tarea</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateTasks;
