import React from "react";

 function TaskList({ tasks, onDelete, onToggle }) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <div
                    key={task.id}
                    className={`task-item ${task.priority} ${task.completed ? 'completed' : 'incompleted'}`}
                >
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span className="task-title">{task.title}</span>
                    <span className="task-priority">{task.priority}</span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
 }

 export default TaskList;