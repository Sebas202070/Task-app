import { useState } from "react";
import { createContext } from "react";

export const CreateContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTaskss(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <CreateContext.Provider value={{ createTaskss, tasks, deleteTask }}>
        {props.children}
      </CreateContext.Provider>
    </>
  );
}
