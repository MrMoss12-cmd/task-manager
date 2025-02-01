import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries";

function TaskList() {
  const { data, loading, error, refetch } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching tasks</p>;

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {data.tasks.map((task) => (
        <div key={task.id} className={`task-item ${task.priority}`}>
          <span>{task.title}</span> - <span>{task.priority}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
