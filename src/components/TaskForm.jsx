import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_TASK } from "../graphql/mutations";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const [createTask] = useMutation(CREATE_TASK);

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Corrección del error

    if (!title.trim()) return;

    try {
      const { data } = await createTask({
        variables: { data: { title, priority } },
      });

      if (onTaskAdded) {
        onTaskAdded(data.createTask);
      }

      setTitle("");
      setPriority("medium");
    } catch (error) {
      console.error("Error al crear la tarea:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task..."
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit"> Add Task</button>
    </form>
  );
}

export default TaskForm;
