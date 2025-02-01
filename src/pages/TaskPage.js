import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function TaskPage() {
    const [tasks, setTasks] = useState([]);

    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={handleTaskAdded}></TaskForm>
            <TaskList />
        </div>
    );
}

export default TaskPage;