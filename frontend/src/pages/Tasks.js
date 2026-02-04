import { useEffect, useState } from "react";
import api from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await api.put(`/tasks/${task._id}`, {
      status: task.status === "pending" ? "completed" : "pending"
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>My Tasks</h2>
      <input
        value={title}
        placeholder="New task"
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} ({task.status})
            <button onClick={() => toggleTask(task)}>Toggle</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Tasks;
